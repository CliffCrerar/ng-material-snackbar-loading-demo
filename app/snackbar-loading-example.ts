import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatIconModule} from '@angular/material/icon';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snackbar-loading-example',
  templateUrl: 'snackbar-loading-example.html',
  styleUrls: ['snackbar-loading-example.css'],
})
export class SnackbarLoadingExample {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    const message = "Updating"
    const action = "go away"
    this._snackBar.open(message, action, {
      //duration: 2000,
    });
  }
}

  @Component({
    selector: `snackbar-loading`,
    template: `
    <div>
      
    </div>`,
    style: [``] 
  })
  export class LoadingSnackBar{}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */