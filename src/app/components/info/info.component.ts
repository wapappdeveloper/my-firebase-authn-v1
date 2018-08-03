import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  data:any = {};
  params:any = {
    header:'info',
    section:{
      topText:'This APP is Created By',
      buttonText:'LIONAL. J.',
      bottomText:'A REAL TIME AUTHENTICATION APP',
      page:'jpleoleo'
    }
  }
  constructor(private globalService:GlobalService, private commonService:CommonService) { }

  ngOnInit() {
    this.data = this.globalService.data;
  }

  openInNewTab() {
    window.open("http://jpleoleo.webs.com/", "_blank");
  }

  navigateTo(page?: string) {
    if(page===null || page===undefined){
      this.commonService.navigateTo(this.data.previousPage);
    }else{
      this.commonService.navigateTo(page);
    }
  }

  emitter(obj:any){
    if(obj && obj.page){
      (obj.page === 'jpleoleo')?this.openInNewTab():(obj.page === 'back')?this.navigateTo(null):this.navigateTo(obj.page);
    }else{
      this.navigateTo('signin');
    }
  }

}
