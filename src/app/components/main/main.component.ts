import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { GlobalService } from '../../services/global.service';
import { DataPersistenceService } from '../../services/data-persistence.service';
import { CONFIG } from '../../config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  params: any = {
    actions: [
      { label: "close", icon: "close.png" },
      { label: "sign-out", icon: "signout.png" },
      { label: "info", icon: "info.png" },
    ],
    header:'main'
  };
  constructor(private commonService:CommonService, private globalService:GlobalService, private datapersistanceService:DataPersistenceService) { }

  ngOnInit() {
  }

  emitter(obj: any) {
    if(obj && obj.event && obj.event==='action' && obj.action){
      switch(obj.action){
        case 'sign-out':this.signout();break;
        case 'info':this.commonService.navigateTo('info');break;
      }
    }else if(obj && obj.event && obj.event==='navigateTo'){
      this.commonService.navigateTo('info');
    }else{
      console.log('unknown action =>', obj);
    }
    
  }

  signout(){
    this.globalService.data.validUser = false;
    this.datapersistanceService.destroyDataInLocalStorage(CONFIG.firebase.projectId);
    //this.commonService.navigateTo('signin');
    this.commonService.navigateTo('signoff');
    console.log('signout');
  }

}
