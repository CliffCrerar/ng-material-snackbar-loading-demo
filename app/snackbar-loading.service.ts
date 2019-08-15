
import {Injectable} from '@angular/core';
import {SnackBarLoadingModel} from './snackbar.loading.model';

@Injectable({providedIn:'root'})
export class SnackbarLoadingService {
  public snackBarData = new SnackBarLoadingModel()
  constructor(private SnackBarDefinition: SnackBarLoadingModel){
    console.log(this.SnackBarDefinition)
  }
}