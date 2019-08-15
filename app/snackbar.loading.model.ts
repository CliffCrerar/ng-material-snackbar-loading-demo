export class SnackBarLoadingModel {
  constructor(
    // Angular mandatory snackbar properties
    public announcementMessage?: string,
    public data?: SnackBarDataModel,
    public hasAction?: false,
    // Custom mandatory snackbar properties  
    public iconNames?: string[],
    public setIcon?: string,
    // Angular optional snackbar properties
    public errorIcon?: string
  ){ }
}

class SnackBarDataModel {
  constructor(
    public message?: string,
    public action?: string
  ){ }
}