import { Component ,NgOninit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {MatIconModule} from '@angular/material/icon';
import {SnackbarLoadingService} from './snackbar-loading.service'
import {SnackBarLoadingModel} from './snackbar-loading.model'
/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snackbar-loading-component',
  templateUrl: 'snackbar-loading-component.html',
  styleUrls: ['snackbar-loading-component.css'],
})
export class SnackbarLoadingComponent implements NgOninit {
  icons: string[];
  snackbarData: SnackBarLoadingModel;
  inputValue: string;
  constructor(
    private _snackBar: MatSnackBar,
    private loadingService: SnackbarLoadingService
    ) { 
      this.snackbarData = this.loadingService.snackBarData;
      this.icons=this.snackbarData.iconNames;
      this.inputValue = this.snackbarData.message;
    }

  ngOnInit(){
    // this.loadingService.snackBarData.iconNames = this.loadingService.icons;
    // this.loadingService.snackBarData.setIcon = this.loadingService.icons[0];
  }

  openNormalSnackBar() {
    const message = "Updating"
    const action = "go away"
    this._snackBar.open(message, action, {
      //duration: 2000,
    });
  }

  openLoadingSnackBar(){
    const message = "Updating"
    const action = "go away"
    this._snackBar.openFromComponent(LoadingSnackBar);
  }

  onRadioChange(event) {
    console.log(event.value);
    this.snackbarData.setIcon = event.value;
  }

  onMessagInput(){
    this.inputValue;
    console.log(this.inputValue);
    this.snackbarData.message = this.inputValue;
  }
}

@Component({
  selector: `snackbar-loading`,
  template: `
    <div class="flex-container-row">
    <div>
      <mat-icon 
        class="loading-spin" 
        [innerHTML]="this.snackbarData.setIcon"></mat-icon>
      </div>
      <div class="snackbar-message">{{snackbarData.message}}</div>
    </div>`,
    styleUrls:['snackbar-loading-component.css']
})
export class LoadingSnackBar { 
  message = 'message';
  snackbarData: SnackBarLoadingModel;
  constructor(private loadingService: SnackbarLoadingService){
    
    this.snackbarData = this.loadingService.snackBarData;
    console.log(this.snackbarData.message)
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */