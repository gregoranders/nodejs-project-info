import * as core from "@actions/core";

import { readFile } from "fs";

// tslint:disable-next-line: no-require-imports no-var-requires
const valid = require("semver/functions/valid");

import { IPackageJSON } from "./package-json";

const readfile = async (path: string) => {
  return new Promise<string>((resolve, reject) => {
    readFile(path, (error: NodeJS.ErrnoException | null, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

export const run = async () => {
  const path = core.getInput("path", { required: false }) || "./package.json";

  try {
    const buffer = await readfile(path);
    const pkg = JSON.parse(buffer) as IPackageJSON;

    if (!pkg.version) {
      throw Error(`Missing version`);
    }

    if (!valid(pkg.version)) {
      throw Error(`Invalid version ${pkg.version}`);
    }

    core.setOutput("name", pkg.name);
    core.setOutput("version", pkg.version);
    core.setOutput("context", buffer);
  } catch (error) {
    core.setFailed(error);
  }
};
