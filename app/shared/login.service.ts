import {Injectable} from 'angular2/core'
import {User} from '../shared/user'
import {Observable} from 'rxjs/Observable'
 
@Injectable()
export class LoginService {
    private user:User=null;
    private token:string=null;
    private uname: string;
    constructor() { }
    setLogin(u:User,t:string, uname?:string){
        this.user = u;
        this.token = t;
        this.uname = uname;
    }
    getToken():string{
        return this.token;
    }
    getUser(){
        return this.user;
    }
    getUserName(){
        return this.uname;
    }
    isLoggedIn(): boolean{
    //    var result = this.user!=null && this.token!=null; 
    //    if( typeof result == "undefined")
    //     return false;
    //    //return this.user!=null && this.token!=null; 
    //    return result;
      return this.user!=null && this.token!=null; 
    }
    logout(){
        this.user = null;
        this.token = null;
    }

    check(){
        return Observable.of(this.isLoggedIn);
    }
}