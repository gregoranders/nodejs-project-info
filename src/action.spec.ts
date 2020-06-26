import { clearTestEnvironment, expectOutputError, setInput } from './fixtures/test-utils';

import { run as testSubject } from './action';

describe('nodejs-project-info', () => {
  const fixturesPath = './src/fixtures';

  beforeEach(() => {
    clearTestEnvironment();
  });

  describe('path', () => {
    it('default', async () => {
      return expect(testSubject()).resolves.toHaveCoreOutput('name', 'nodejs-project-info');
    });

    it('valid', async () => {
      setInput('path', `${fixturesPath}/valid-package.json`);
      return expect(testSubject()).resolves.toHaveCoreOutput('version', '0.0.1');
    });

    it('invalid', async () => {
      setInput('path', 'invalidfile');
      return expect(testSubject()).resolves.toHaveCoreError(/^ENOENT: no such file or directory/);
    });

    it('directory', async () => {
      setInput('path', './node_modules');
      return expect(testSubject()).resolves.toHaveCoreError(/^EISDIR: illegal operation on a directory/);
    });
  });

  describe('version', () => {
    it('missing', async () => {
      expect.assertions(1);
      return expectOutputError(testSubject, `${fixturesPath}/missing-version-package.json`, /Missing version/);
    });

    it('invalid', async () => {
      expect.assertions(1);
      // tslint:disable-next-line: max-line-length
      return expectOutputError(testSubject, `${fixturesPath}/invalid-version-package.json`, /Invalid version a\.b\.c/);
    });
  });
});
