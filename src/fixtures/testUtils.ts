declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // tslint:disable-next-line: interface-name
    interface Matchers<R, T> {
      toHaveCoreError(message: RegExp): R;
      toHaveCoreOutput(key: string, value: string): R;
    }
  }
}

const setFailedMock = jest.fn();
const setOutputMock = jest.fn();

const actionsCoreMock = jest.mock('@actions/core', () => {
  return {
    getInput: (name: string, options?: { required: boolean }) => {
      return process.env[`INPUT_${name.toUpperCase()}`];
    },
    setFailed: setFailedMock,
    setOutput: setOutputMock,
  };
});

const inputVars: { [key: string]: string } = {};

export const setInput = (name: string, value: string) => {
  const varName = `INPUT_${name.toUpperCase()}`;
  inputVars[varName] = value;
  process.env[varName] = value;
};

export const clearTestEnvironment = () => {
  Object.keys(inputVars).forEach((varName) => {
    Reflect.deleteProperty(process.env, varName);
    Reflect.deleteProperty(inputVars, varName);
  });
  actionsCoreMock.clearAllMocks();
};

expect.extend({
  // tslint:disable-next-line: object-literal-shorthand space-before-function-paren
  toHaveCoreError: function (recieved: jest.Mock, msg: RegExp) {
    const error = setFailedMock.mock.calls.length ? (setFailedMock.mock.calls[0][0] as Error) : undefined;
    const pass = error && error.message.match(msg) ? true : false;
    const options = {
      comment: 'Error.message equality',
      isNot: this.isNot,
      promise: this.promise,
    };

    return {
      message: () => {
        if (pass) {
          return this.utils.matcherHint('toHaveCoreError', error?.message, `${msg}`, options);
        } else {
          const diff = this.utils.diff(msg, error?.message, {
            expand: this.expand,
          });
          return this.utils.matcherHint('toHaveCoreError', error?.message, `${msg}`, options) + `\n\n${diff}`;
        }
      },
      pass,
    };
  },
  // tslint:disable-next-line: object-literal-shorthand space-before-function-paren
  toHaveCoreOutput: function (recieved: jest.Mock, key: string, value: string) {
    const keyMatch = setOutputMock.mock.calls.find((call) => call[0] === key);
    const match = setOutputMock.mock.calls.find((call) => call[0] === key && call[1] === value);
    const pass = match ? true : false;
    const options = {
      isNot: this.isNot,
      promise: this.promise,
    };

    return {
      message: () => {
        if (pass) {
          return this.utils.matcherHint('toHaveCoreOutput', `${match[0]}=${match[1]}`, `${key}=${value}`, options);
        } else {
          const diff = this.utils.diff(`${key}=${value}`, keyMatch ? `${keyMatch[0]}=${keyMatch[1]}` : '', {
            expand: this.expand,
          });
          return (
            this.utils.matcherHint(
              'toHaveCoreError',
              keyMatch ? `${keyMatch[0]}=${keyMatch[1]}` : '',
              `${key}=${value}`,
              options,
            ) + `\n\n${diff}`
          );
        }
      },
      pass,
    };
  },
});

export const expectOutputError = (promise: () => Promise<void>, path: string, regex: RegExp) => {
  setInput('path', `${path}`);
  return expect(promise()).resolves.toHaveCoreError(regex);
};
