import { bootstrap } from 'angular2/platform/browser';

//import {LoginService} from './shared/login.service'
//import {appInjector} from './app-injector';
import {provide, ComponentRef} from 'angular2/core';
import{ROUTER_PROVIDERS} from 'angular2/router';

// Our main component
import { AppComponent } from './app.component';

//bootstrap(AppComponent);

 bootstrap(AppComponent ,[ROUTER_PROVIDERS]);

// bootstrap(AppComponent ,[ROUTER_PROVIDERS])
// .then((appRef) => {
//   // store a reference to the application injector
//   appInjector(appRef.injector);
// });


//bootstrap(AppComponent, [LoginService]);

