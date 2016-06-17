 import {Http, HTTP_PROVIDERS, Headers, Response} from 'angular2/http'
    import {Injectable} from 'angular2/core'
    import 'rxjs/add/operator/map'
    import {User} from '../shared/user'
    import {HeadersService} from './headers.service'
    import { Observable } from 'rxjs/Observable';


    @Injectable()
    export class UserService {
        
        //private _loginUrl = './api/login';
        private _loginUrl = 'http://localhost:60323/Token';

        constructor(private _http: Http, private _header:HeadersService) {
         
        }
        public insert(u:User) {
        // return this._http
        //         .post(this._loginUrl, JSON.stringify(u),this._header.getJsonHeaders())
        //         .map(res => res.json());
                
       //var data = "username=" + "donyash@hotmail.com" + "&password=" + "password1" + "&grant_type=password";

       return this._http.post(
                    this._loginUrl, 
                    this._header.formatUserLogin(u), 
                    this._header.getContentTypeHeaders())
                    .map(res => res.json() );
                   // .do(data => console.log('The data: ' +  JSON.stringify(data)));
                   // .catch(this.handleError));
        }
        
    //    private handleError(error: any) {
    //       // TODO:send to logging infrastructure
    //       console.error(error);
    //       console.error(error.json().message);
    //       throw error.json().error || error.json().message;  
    //      //return Observable.throw(error.json().error || error.json().message);    //|| 'Server error');
    //     }
    }