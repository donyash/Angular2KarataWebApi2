// export function isLoggedIn() {
//     return false;
// }

import {Injector} from 'angular2/core';
import {appInjector} from '../app-injector';
//import {Auth} from './Auth';
import{LoginService} from './login.service';
import {Router} from 'angular2/router';
//ComponentInstruction

export const isLoggedIn = (next, previous) => {
	let injector: Injector = appInjector(); // get the stored reference to the injector
	let auth: LoginService = injector.get(LoginService);
	let router: Router = injector.get(Router);

  // return a boolean or a promise that resolves a boolean
	return new Promise((resolve) => {
	  auth.check()
	      .subscribe((result) => {
					if (result) {
						resolve(true);
					} else {
						router.navigate(['Login']);
						resolve(false);
					}
				});
  });
};
