export class SnackBarLoadingModel {
  constructor(
    // Angular mandatory snackbar properties
    public iconNames?: string[],
    public data?: SnackBarDataModel,
    public announcementMessage?: string,
    public hasAction?: boolean,
    // Custom mandatory snackbar properties  
    public setIcon?: string,
    // Angular optional snackbar properties
    public errorIcon?: string
  ){ }
}

export class SnackBarDataModel {
  constructor(
    public message?: string,
    public action?: string
  ){ }
}