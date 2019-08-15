
import {Injectable} from '@angular/core';
import {SnackBarLoadingModel} from './snackbar.loading.model';

@Injectable()
export class SnackbarLoadingService {
  
  constructor(private SnackBarDefinition: SnackBarLoadingModel){
    
  }
}