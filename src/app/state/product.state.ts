export enum DataStateEnum {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState:DataStateEnum,
  data?:any,
  errorMessage?:string
  dataProcess?: any
}
