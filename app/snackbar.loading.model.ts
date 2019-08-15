export class SnackBarLoadingModel {
  constructor(  
    public iconNames: string[],
    public setIcon: string,
    public config: ConfigBarLoadingModel,
  ){}
}

class ConfigBarLoadingModel {
  constructor(
    public message: string,
    public action: string,
    public duraiton: string
  ){}
}