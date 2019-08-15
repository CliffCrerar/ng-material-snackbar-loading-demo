import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import {MatIconModule} from '@angular/material/icon';
import {SnackbarLoadingService} from './snackbar-loading.service'
/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snackbar-loading-component',
  templateUrl: 'snackbar-loading-component.html',
  styleUrls: ['snackbar-loading-component.css'],
})
export class SnackbarLoadingComponent {
  icons: string[] = ['sync', 'donut_large', 'settings_backup_restore', 'replay', 'sentiment_satisfied_alt', 'gps_fixed', 'gps_not_fixed', 'refresh', 'data_usage', 'rotate_right', 'rotate_left', 'filter_tilt_shift']
  selected: string;

  constructor(
    private _snackBar: MatSnackBar,
    private loadingService: SnackbarLoadingService
    ) { 
      console.log(loadingService)
      this.loadingService.iconNames = this.icons;
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
  }
}

@Component({
  selector: `snackbar-loading`,
  template: `
    <div>
      <mat-icon class="loading-spin">sync</mat-icon>{{message}}
    </div>`,
    styleUrls:['snackbar-loading-component.css']
})
export class LoadingSnackBar { 
  message = 'message';
  constructor(private loadingService: SnackbarLoadingService){
    console.log(loadingService)
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */