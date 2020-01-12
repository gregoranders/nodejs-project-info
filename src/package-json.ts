export interface IPackageJSON {

  readonly author?: string | IAuthor;

  readonly bin?: string | IBinMap;

  readonly bugs?: string | IBugs;

  readonly bundledDependencies?: string[];

  readonly config?: IConfig;

  readonly contributors?: string[] | IAuthor[];

  readonly cpu?: string[];

  readonly dependencies?: IDependencyMap;

  readonly description?: string;

  readonly devDependencies?: IDependencyMap;

  readonly directories?: IDirectories;

  readonly engines?: IEngines;

  readonly files?: string[];

  readonly homepage?: string;

  readonly keywords?: string[];

  readonly license?: string;

  readonly main?: string;

  readonly man?: string | string[];

  readonly name: string;

  readonly optionalDependencies?: IDependencyMap;

  readonly os?: string[];

  readonly peerDependencies?: IDependencyMap;

  readonly preferGlobal?: boolean;

  readonly private?: boolean;

  readonly publishConfig?: IPublishConfig;

  readonly repository?: string | IRepository;

  readonly scripts?: IScriptsMap;

  readonly version?: string;
}

export interface IAuthor {
  email?: string;
  homepage?: string;
  name: string;
}

export interface IBinMap {
  [commandName: string]: string;
}

export interface IBugs {
  email: string;
  url: string;
}

export interface IConfig {
  config?: object;
  name?: string;
}

export interface IDependencyMap {
  [dependencyName: string]: string;
}

export interface IDirectories {
  bin?: string;
  doc?: string;
  example?: string;
  lib?: string;
  man?: string;
}

export interface IEngines {
  node?: string;
  npm?: string;
}

export interface IPublishConfig {
  registry?: string;
}

export interface IRepository {
  type: string;
  url: string;
}

export interface IScriptsMap {
  [scriptName: string]: string;
}
