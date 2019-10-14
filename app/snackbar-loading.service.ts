
import { Injectable } from '@angular/core';
import { SnackBarLoadingModel, SnackBarDataModel } from './snackbar.loading.model';

@Injectable({ providedIn: 'root' })
export class SnackbarLoadingService {
  icons = ['sync', 'donut_large', 'settings_backup_restore', 'replay', 'sentiment_satisfied_alt', 'gps_fixed', 'gps_not_fixed', 'refresh', 'data_usage', 'rotate_right', 'rotate_left', 'filter_tilt_shift'];
  private _snackBarData;
  private data = new SnackBarDataModel('This is a message', 'ACTION');
  constructor() {
    this._snackBarData = new SnackBarLoadingModel(
      this.icons,
      this.data,
      'announcementMessage',
      false, 'sync_problem',
      this.icons[0]
    )
  }
  get snackBarData(): SnackBarLoadingModel{
    return this._snackBarData
  }
}