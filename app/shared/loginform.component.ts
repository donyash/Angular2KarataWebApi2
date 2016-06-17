import { Component, OnInit , Input} from 'angular2/core';

import {LoginService} from '../shared/login.service';
import {Router} from 'angular2/router';
import {UserService} from '../shared/user.service'
import {User} from '../shared/user' 


@Component({
    selector: 'login-form',
    templateUrl: 'app/shared/loginform.component.html'
})

export class LoginFormComponent{
  public pageTitle: string = "Welcome";
  //@Input() private user:User=new User();
  private user:User=new User();
  private isLoggedIn: boolean;
  private showLoading:boolean = false;
  private errorMessage:string = null;

 constructor(private userService:UserService, 
    private loginService:LoginService, 
    private router:Router){ }

     ngOnInit(): void{
      console.log('ngOnInit: LoginComponent');  
      this.isLoggedIn = this.loginService.isLoggedIn(); 
    }
    
    logOut(): void{
        //todo: may also send to a server api method?
        this.loginService.setLogin(null,null,null);
        this.router.navigate( ['Dashboard'] );
    }
    onClick(event){
        event.preventDefault();
        this.showLoading = true;  
        this.errorMessage = null; 
        // console.log("user:::" + JSON.stringify(this.user));              
        
        this.userService.insert(this.user).subscribe(
            result => this.onLoginResult(result),
            error => this.onLoginError(error)
        );
    }
    onLoginResult(result){
        console.log(result);
        console.log('token: ' + result.access_token);
        console.log('username: ' + result.userName);
        this.loginService.setLogin(result.userName,result.access_token, result.userName);
        this.router.navigate( ['Dashboard'] );
    }
    onLoginError(error){
        //console.log(JSON.stringify(error));
        this.showLoading = false; 
        this.errorMessage = error.json().error_description;
    }
}