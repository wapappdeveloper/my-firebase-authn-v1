import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.css']
})
export class SignupSuccessComponent implements OnInit {
  params:any = {
    header:'Signup Success',
    section:{
      topText:'Signup Successfully',
      buttonText:'Back to Signin',
      bottomText:'A REAL TIME AUTHENTICATION APP',
      page:'signin'
    }
  }

  constructor(private commonService:CommonService) { }

  ngOnInit() {
  }

  emitter(obj:any){
    (obj && obj.page)?this.navigateTo(obj.page):this.navigateTo('signin');
  }

  navigateTo(page:string){
    this.commonService.navigateTo(page);
  }

}
