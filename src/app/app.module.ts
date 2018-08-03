import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { SigninComponent } from "./components/signin/signin.component";
import { InfoComponent } from './components/info/info.component';
import { SignupComponent } from "./components/signup/signup.component";
import { SignoffComponent } from './components/signoff/signoff.component';

import { AuthnService } from './services/authn.service';
import { InteractService } from './services/interact.service';
import { CommonService } from './services/common.service';
import { DataPersistenceService } from './services/data-persistence.service';
import { PageAuthorizationGuard } from './page-authorization.guard';

import { CONFIG } from './config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { GlobalService } from './services/global.service';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupSuccessComponent } from './components/signup-success/signup-success.component';
import { SectionComponent } from './components/section/section.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    InfoComponent,
    SignupComponent,
    SignoffComponent,
    MainComponent,
    HeaderComponent,
    SignupSuccessComponent,
    SectionComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING,
    HttpClientModule,
    AngularFireModule.initializeApp(CONFIG.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthnService, InteractService, CommonService, DataPersistenceService, PageAuthorizationGuard, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
