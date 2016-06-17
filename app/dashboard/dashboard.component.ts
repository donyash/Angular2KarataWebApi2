import { Component, OnInit } from 'angular2/core';
import{LoginService} from '../shared/login.service';
import {Router} from 'angular2/router';

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    public pageTitle: string = "Dashboard";
    isLoggedIn: boolean;
    loggedInUser: string;
    
   constructor(private loginService: LoginService,
                private router:Router){
       
   } 
 ngOnInit(): void{
      console.log('ngOnInit: DashboardComponent');  
      this.isLoggedIn = this.loginService.isLoggedIn(); 
      this.loggedInUser = this.loginService.getUserName() == null ? 'Not logged in' :  this.loginService.getUserName();
      console.log('logged in user:' + this.loginService.getUserName());        
    }
  logIn() {
         this.router.navigate(['Login']);
    }
  logOut() {
        this.loginService.setLogin(null,null,null);
        return this.router.navigate( ['Welcome'] );   //TODO: create logout component
    }
   close():void{
    var parent = document.getElementById("alert-div");
    var child = document.getElementById("alert");
    parent.removeChild(child);
   }
}
