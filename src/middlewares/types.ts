export type DefaultParams = {
  branch: string;
};

export type EntriesByFolderParams = {
  folder: string;
  extension: string;
  depth: 1;
};

export type EntriesByFilesParams = {
  files: { path: string }[];
};

export type GetEntryParams = {
  path: string;
};

export type DeleteEntryParams = {
  collection: string;
  slug: string;
};

export type DataFile = { slug: string; path: string; raw: string; newPath?: string };

export type Asset = { path: string; content: string; encoding: 'base64' };

export type PersistEntryParams = {
  entry?: DataFile;
  dataFiles?: DataFile[];
  assets: Asset[];
  options: {
    collectionName?: string;
    commitMessage: string;
  };
};

export type GetMediaParams = {
  mediaFolder: string;
  publicFolder: string;
};

export type GetMediaFileParams = {
  path: string;
};

export type PersistMediaParams = {
  asset: Asset;
  options: {
    commitMessage: string;
  };
};

export type DeleteFileParams = {
  path: string;
  options: {
    commitMessage: string;
  };
};

export type DeleteFilesParams = {
  paths: string[];
  options: {
    commitMessage: string;
  };
};

export type FsItem = {
  file: string;
  isDirectory: boolean;
};
