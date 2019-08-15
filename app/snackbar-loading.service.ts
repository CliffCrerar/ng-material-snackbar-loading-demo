
import {Injectable} from '@angular/core';
import {SnackBarLoadingModel,SnackBarDataModel} from './snackbar.loading.model';

@Injectable({providedIn:'root'})
export class SnackbarLoadingService {
  public snackBarData = new SnackBarLoadingModel()
  constructor(){
    console.log(this.snackBarData)
    this.snackBarData.announcementMessage = 'announcementMessage';
    this.snackBarData.data = new SnackBarDataModel('This is a message', 'ACTION');
    this.snackBarData.hasAction = false;
    this.snackBarData.errorIcon = 'sync_problem';
  }
}