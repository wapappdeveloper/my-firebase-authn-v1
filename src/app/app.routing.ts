import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./components/signin/signin.component";
import { InfoComponent } from "./components/info/info.component";
import { SignupComponent } from "./components/signup/signup.component";
import { SignoffComponent } from "./components/signoff/signoff.component";
import { PageAuthorizationGuard } from "./page-authorization.guard";
import { MainComponent } from "./components/main/main.component";
import { SignupSuccessComponent } from "./components/signup-success/signup-success.component";

const APP_ROUTES: Routes = [
    { path: "", redirectTo: "/signin", pathMatch: 'full' },
    { path: "signin", component: SigninComponent },
    { path: "signup", component: SignupComponent },
    { path: "signup-success", component: SignupSuccessComponent },
    { path: "signoff", component: SignoffComponent },
    { path: "info", component: InfoComponent },
    { path: "main", component: MainComponent, canActivate: [PageAuthorizationGuard] }
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
