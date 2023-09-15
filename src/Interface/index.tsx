interface Button {
  btnClass?: string;
  title: string;
  onClick?: () => void;
}

interface UploadFiles {
  parentId: string;
}

interface ShowFiles {
  parentId: string;
}

interface Progress {
  progress: number;
}

interface ArrayType {
  map: Function;
}
interface FolderPayload {
  folderName: string;
  isFolder: boolean;
  fileList: object;
  parentId: string;
}

interface GithubAuth {
  clientId: string;
  clientSecret: string;
}

interface DiscordAuth {
  clientId: string;
  clientSecret: string;
}
