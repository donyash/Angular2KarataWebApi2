import { Component , OnInit} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import{ProductService} from './products/product.service';
import{HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';  //load all features
import{ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import{WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';

import{LoginComponent} from './shared/login.component';
import { Router } from 'angular2/router';

import{HeadersService} from './shared/headers.service';
import{LoginService} from './shared/login.service';
import{UserService} from './shared/user.service';
import{User} from './shared/user';

import{DashboardComponent} from './dashboard/dashboard.component';


@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' [routerLink]="['Welcome']">{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Dashboard']">Dashboard</a></li>                    
                    <li><a [routerLink]="['Products']">Product List</a></li>
                </ul>
                
                <div>
                    <form class="navbar-form navbar-right">
                        <!-- <button *ngIf='!isLoggedIn' type="submit" class="btn btn-default" (click)="logIn()">Login</button> -->
                        <!-- <button *ngIf='isLoggedIn' type="submit" class="btn btn-default" (click)="logIn()">Logout</button> -->
                        
                        <!-- <button type="submit" class="btn btn-default" >Register</button> -->
                        <!-- <a [routerLink]="['Login']">Login</a> -->
                        <div><!-- todo: message here --></div>
                    </form>
                </div>
                
                
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives:[ROUTER_DIRECTIVES],
    providers:[ProductService, HTTP_PROVIDERS, HeadersService, UserService, LoginService]
    //providers:[ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS, HeadersService, UserService, LoginService]
    //providers:[ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
    
})

@RouteConfig([{
    path: '/welcome/', name: 'Welcome', component: WelcomeComponent, useAsDefault: true
},{
    path: '/products', name: 'Products', component: ProductListComponent    
},
{
    path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent    
},
{
    path: '/login', name: 'Login', component: LoginComponent
},
{
    path: '/dashboard', name: 'Dashboard', component: DashboardComponent
}
])
export class AppComponent implements OnInit{
    pageTitle: string = 'Acme Company'
    //isLoggedIn: boolean;

   constructor(private _router: Router , private loginService: LoginService) {}
    
    ngOnInit(): void{
    //    this.loginService.setLogin(new User(),"my token jdfkdjfkdjjd", "donyash");
    //        var nameInfo = this.loginService.getUserName();
    //          console.log('userName: xxxfff : ' + nameInfo);   
              console.log('ngOnInit: AppComponent');   
              //this.isLoggedIn = this.loginService.isLoggedIn(); 
    }
    logIn(): void {
         this._router.navigate(['Login']);
    }
    
}
