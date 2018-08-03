import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  data:DataModel = {
    email:'',
    validUser:false,
    previousPage:'',
    currentPage:''
  };
  constructor() { }

}

interface DataModel{
  email:string,
  validUser:boolean,
  previousPage:string,
  currentPage:string
}
