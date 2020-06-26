import { clearTestEnvironment, expectOutputError, setInput } from './fixtures/test-utils';

import { run as testSubject } from './action';

describe('nodejs-project-info', () => {
  const fixturesPath = './src/fixtures';

  beforeEach(() => {
    clearTestEnvironment();
  });

  describe('path', () => {
    it('should correctly resolve from default package.json location (project root)', async () => {
      return expect(testSubject()).resolves.toHaveCoreOutput('name', 'nodejs-project-info');
    });

    it('should correctly resolve from custom package.json location (project root)', async () => {
      setInput('path', `${fixturesPath}/valid-package.json`);
      return expect(testSubject()).resolves.toHaveCoreOutput('version', '0.0.1');
    });

    it('should contain an error on invalid package.json', async () => {
      setInput('path', 'invalidfile');
      return expect(testSubject()).resolves.toHaveCoreError(/^ENOENT: no such file or directory/);
    });

    it('should contain an error on path pointing to a directory', async () => {
      setInput('path', './node_modules');
      return expect(testSubject()).resolves.toHaveCoreError(/^EISDIR: illegal operation on a directory/);
    });
  });

  describe('version', () => {
    it('should contain an error when `version` is missing', async () => {
      expect.assertions(1);
      return expectOutputError(testSubject, `${fixturesPath}/missing-version-package.json`, /Missing version/);
    });

    it('should contain an error when `version` is not a valid SemVer', async () => {
      expect.assertions(1);
      // tslint:disable-next-line: max-line-length
      return expectOutputError(testSubject, `${fixturesPath}/invalid-version-package.json`, /Invalid version a\.b\.c/);
    });
  });
});
