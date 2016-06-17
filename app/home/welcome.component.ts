import { Component } from 'angular2/core';
import {LoginFormComponent} from '../shared/loginform.component'

@Component({
    templateUrl: 'app/home/welcome.component.html',
        directives:[LoginFormComponent]
})
export class WelcomeComponent{
    public pageTitle: string = "Welcome";

 constructor(){ }   
}