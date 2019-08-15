export class SnackBarConfigModel {
  constructor(
    // Angular mandatory snackbar properties
    public announcementMessage: string,
    public data: SnackBarDataModel,
    public hasAction = true,
    // Custom mandatory snackbar properties  
    public iconNames: string[],
    public setIcon: string,
    // Angular optional snackbar properties
  ){}
}

class SnackBarDataModel {
  constructor(
    public message: string,
    public action: string,
  ){}
}