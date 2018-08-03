import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input('params') private params: any;
  @Output('emitter') private emitter:EventEmitter<any> = new EventEmitter();
  private topText:string = '';
  private buttonText:string = '';
  private bottomText:string = '';
  private page:string = '';
  constructor() { }

  ngOnChanges() {
    if(this.params && this.params.section && this.params.section.topText){
      this.topText = this.params.section.topText;
    }
    if(this.params && this.params.section && this.params.section.buttonText){
      this.buttonText = this.params.section.buttonText;
    }
    if(this.params && this.params.section && this.params.section.bottomText){
      this.bottomText = this.params.section.bottomText;
    }
    if(this.params && this.params.section && this.params.section.page){
      this.page = this.params.section.page;
    }
  }

  ngOnInit() {

  }

  navigateTo(page:string){
    this.emitter.emit({event:'navigateTo', page:page});
  }

}
