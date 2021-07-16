import fileService from './file.service';
import folderService from './folder.service';

export function deleteItems(selectedItems: any[]): Promise<any> {
  return Promise.all(_.map(selectedItems, (v) => {
    if (v.onDelete) {
      return (next) => {
        v.onDelete();
        next();
      };
    }
    const url = v.isFolder
      ? `/api/storage/folder/${v.id}`
      : `/api/storage/folder/${v.folderId}/file/${v.id}`;

    return (next) => (v.isFolder ?
      folderService.deleteFolder(v) :
      fileService.deleteFile(v)
    )
      .then(() => next())
      .catch(next);
  }));
}

const storageService = {
  deleteItems
};

export default storageService;