import {Component, OnInit} from 'angular2/core'
import {User} from '../shared/user' 
import {UserService} from '../shared/user.service'
import {LoginService} from '../shared/login.service'
import {Router} from 'angular2/router';

import {HeadersService} from '../shared/headers.service'
import {WelcomeComponent} from '../home/welcome.component';
//import{ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import{RouteConfig} from 'angular2/router';
import {LoginFormComponent} from '../shared/loginform.component'

@Component({
    templateUrl: 'app/shared/login.component.html',
    directives:[LoginFormComponent]
})

export class LoginComponent implements OnInit { 
    private user:User=new User();
    private showLoading:boolean = false;
    private errorMessage:string = null;
    isLoggedIn: boolean;
    pageTitle: string = "Login";

    constructor(private userService:UserService, 
    private loginService:LoginService, 
    private router:Router){ }

     ngOnInit(): void{
      console.log('ngOnInit: LoginComponent');  
      this.isLoggedIn = this.loginService.isLoggedIn(); 
    }
}