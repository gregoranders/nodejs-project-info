export interface PackageJSON {
  readonly author?: string | Author;

  readonly bin?: string | BinMap;

  readonly bugs?: string | Bugs;

  readonly bundledDependencies?: string[];

  readonly config?: Config;

  readonly contributors?: string[] | Author[];

  readonly cpu?: string[];

  readonly dependencies?: DependencyMap;

  readonly description?: string;

  readonly devDependencies?: DependencyMap;

  readonly directories?: Directories;

  readonly engines?: Engines;

  readonly files?: string[];

  readonly homepage?: string;

  readonly keywords?: string[];

  readonly license?: string;

  readonly main?: string;

  readonly man?: string | string[];

  readonly name: string;

  readonly optionalDependencies?: DependencyMap;

  readonly os?: string[];

  readonly peerDependencies?: DependencyMap;

  readonly preferGlobal?: boolean;

  readonly private?: boolean;

  readonly publishConfig?: PublishConfig;

  readonly repository?: string | Repository;

  readonly scripts?: ScriptsMap;

  readonly version?: string;
}

export interface Author {
  email?: string;
  homepage?: string;
  name: string;
}

export interface BinMap {
  [commandName: string]: string;
}

export interface Bugs {
  email: string;
  url: string;
}

export interface Config {
  // eslint-disable-next-line @typescript-eslint/ban-types
  config?: object;
  name?: string;
}

export interface DependencyMap {
  [dependencyName: string]: string;
}

export interface Directories {
  bin?: string;
  doc?: string;
  example?: string;
  lib?: string;
  man?: string;
}

export interface Engines {
  node?: string;
  npm?: string;
}

export interface PublishConfig {
  registry?: string;
}

export interface Repository {
  type: string;
  url: string;
}

export interface ScriptsMap {
  [scriptName: string]: string;
}
