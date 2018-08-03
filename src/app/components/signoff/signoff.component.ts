import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-signoff',
  templateUrl: './signoff.component.html',
  styleUrls: ['./signoff.component.css']
})
export class SignoffComponent implements OnInit {
  params:any = {
    header:'Signup Success',
    section:{
      topText:'Signout Successfully',
      buttonText:'Back to Signin',
      bottomText:'A REAL TIME AUTHENTICATION APP',
      page:'signin'
    }
  }

  constructor(private commonService:CommonService, private globalService:GlobalService) { }

  ngOnInit() {
    
  }

  openInNewTab() {
    window.open("http://jpleoleo.webs.com/", "_blank");
  }

  emitter(obj:any){
    (obj && obj.page)?this.navigateTo(obj.page):this.navigateTo('signin');
  }

  navigateTo(page: string) {
    this.commonService.navigateTo(page);
  }
}
