import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import { StorageState } from '../storage.model';
import { storageActions } from '..';
import { RootState } from '../../..';
import { DriveItemData } from '../../../../models/interfaces';
import storageService from '../../../../services/storage.service';

export const deleteItemsThunk = createAsyncThunk<void, DriveItemData[], { state: RootState }>(
  'storage/deleteItems',
  async (itemsToDelete: DriveItemData[], { dispatch }) => {
    await storageService.deleteItems(itemsToDelete);
    dispatch(storageActions.popItems({ items: itemsToDelete }));
    dispatch(storageActions.clearSelectedItems());
  },
);

export const deleteItemsThunkExtraReducers = (builder: ActionReducerMapBuilder<StorageState>): void => {
  builder
    .addCase(deleteItemsThunk.pending, (state) => {
      state.isDeletingItems = true;
    })
    .addCase(deleteItemsThunk.fulfilled, (state) => {
      state.isDeletingItems = false;
    })
    .addCase(deleteItemsThunk.rejected, (state) => {
      state.isDeletingItems = false;
    });
};
