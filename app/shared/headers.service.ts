
import {Injectable} from 'angular2/core'
import {Headers} from 'angular2/http'

import {LoginService} from '../shared/login.service'
import {User} from '../shared/user'
 
@Injectable()
export class HeadersService {
    constructor(private _login: LoginService){}
	
	getContentTypeHeaders(token?:string){
		var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
         
        if (token)
            //headers.append('x-access-token',token)
            headers.append('Authorization','Bearer ' + token)
            
		return {headers: headers};
	}
    
     getUserToken(){
         //console.log('user token: ' + this._login.getToken());
         //console.log('user: ' + this._login.getUser());
         
	 	var headers = new Headers();
             headers.append('Authorization','Bearer ' + this._login.getToken())
	 	return {headers: headers};
	 }
     
     formatUserLogin(user: User): string{
         var data = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
         return data;
     }

}