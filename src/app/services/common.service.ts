import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable()
export class CommonService {

  constructor(private httpClient: HttpClient, private router: Router, private globalService: GlobalService) { }

  emailValidate(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  passwordValidate(password: string){
    if(password && password.length>=6){
      return true;
    }else{
      return false;
    }
  }

  navigateTo(page: string) {
    var previousPage: string = this.router.url;
    this.router.navigateByUrl(page);
    var currentPage: string = page;
    console.log('previousPage=', previousPage, 'currentPage=', currentPage);
    this.globalService.data.previousPage = previousPage;
    this.globalService.data.currentPage = currentPage;
  }

  preloadAssets(url: string) {
    this.httpClient.get(url).subscribe((res:any) => {
      console.log(res);
      for (var i = 0; i < res.length; i++) {
        var asset:string = res[i];
        if(asset.indexOf('.gif')!==-1){
          this.getAssets('assets/images/gifs/'+asset);
        }else if(asset.indexOf('.png')!==-1){
          this.getAssets('assets/images/pngs/'+asset);
        }else if(asset.indexOf('.jpg')!==-1){
          this.getAssets('assets/images/jpgs/'+asset);
        }else if(asset.indexOf('.jpeg')!==-1){
          this.getAssets('assets/images/jpgs/'+asset);
        }else if(asset.indexOf('.svg')!==-1){
          this.getAssets('assets/images/svgs/'+asset);
        }else{
          console.warn('unknow extension =>', asset);
        }
      }
    }, (err) => {
      console.error(err);
    });
  }

  getAssets(url:string){
    this.httpClient.get(url);
  }

}
