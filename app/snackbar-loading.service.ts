
import {Injectable} from '@angular/core';
import {SnackBarLoadingModel} from './snackbar.loading.model';

@Injectable({providedIn:'root'})
export class SnackbarLoadingService {
  
  constructor(private SnackBarDefinition: SnackBarLoadingModel){
    console.log(this.SnackBarDefinition)
  }
}