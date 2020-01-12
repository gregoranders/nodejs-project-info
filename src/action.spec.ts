
import { clearTestEnvironment, setInput } from "./fixtures/testUtils";

import { run as testSubject } from "./action";

describe("nodejs-project-info", () => {

  const fixturesPath = "./src/fixtures";

  beforeEach(() => {
    clearTestEnvironment();
  });

  describe("path", () => {

    it("default", async () => {
      return expect(testSubject()).resolves.toHaveCoreOutput("name", "nodejs-project-info");
    });

    it("valid", async () => {
      setInput("path", `${fixturesPath}/valid-package.json`);
      return expect(testSubject()).resolves.toHaveCoreOutput("version", "0.0.1");
    });

    it("invalid", async () => {
      setInput("path", "true");
      return expect(testSubject()).resolves.toHaveCoreError("ENOENT: no such file or directory, open 'true'");
    });
  });

  describe("version", () => {

    it("missing", async () => {
      setInput("path", `${fixturesPath}/missing-version-package.json`);
      return expect(testSubject()).resolves.toHaveCoreError("Missing version");
    });

    it("invalid", async () => {
      setInput("path", `${fixturesPath}/invalid-version-package.json`);
      return expect(testSubject()).resolves.toHaveCoreError("Invalid version a.b.c");
    });
  });
});
