export class SnackBarLoadingModel {
  
  
  constructor(
    // Angular mandatory snackbar properties
    public announcementMessage: string = 'I am announcing!',
    public data: SnackBarDataModel,
    public hasAction = false,
    // Custom mandatory snackbar properties  
    public iconNames: string[],
    public setIcon: string,
    // Angular optional snackbar properties
  ){
  }
}

class SnackBarDataModel {
  constructor(
    public message = 'Update processing please wait',
    public action = 'Dismiss',
  ){}
}