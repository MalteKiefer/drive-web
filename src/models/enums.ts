export enum AppViewLayout {
  Empty = 'empty',
  HeaderAndSidenav = 'header-and-sidenav'
}

export enum FileStatusType {
  Error = 'error',
  Success = 'success',
  Encrypting = 'encrypting',
  Downloading = 'downloading',
  Uploading = 'uploading',
  None = 'none'
}

export enum FileStatusTypes {
  'error',
  'success',
  'encrypting',
  'decrypting',
  'pending',
  'downloading',
  'uploading',
  'creating-directory-structure'
}

export enum FileActionTypes {
  'download',
  'upload'
}

export enum ItemAction {
  Rename,
  Download,
  Share,
  Info,
  Delete
}

export enum AnalyticsTrack {
  SignOut = 'user-signout',
  SignIn = 'user-signin',
  SignInAttempted = 'user-signin-attempted',
  SignUp = 'user-signup',
  UserEnterPayments = 'user-enter-payments',
  PlanSubscriptionSelected = 'plan-subscription-selected',
  FolderCreated = 'folder-created',
  FolderRename = 'folder-rename',
  FileRename = 'file-rename',
  FileDownloadStart = 'file-download-start',
  FileDownloadError = 'file-download-error',
  FileDownloadFinished = 'file-download-finished',
  FileUploadStart = 'file-upload-start',
  FileUploadError = 'file-upload-error',
  FileUploadFinished = 'file-upload-finished',
  OpenWelcomeFile = 'file-welcome-open',
  DeleteWelcomeFile = 'file-welcome-delete',
  FileShare = 'file-share',
  UserResetPasswordRequest = 'user-reset-password-request',
  FileUploadBucketIdUndefined = 'file-upload-bucketid-undefined'
}

export enum DevicePlatform {
  Web = 'web'
}

export enum FileViewMode {
  List = 'list',
  Grid = 'grid'
}
export enum Workspace {
  Individual = 'individual',
  Business = 'business'
}