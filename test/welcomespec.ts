//www.syntaxsuccess.com/viewarticle/angular-2.0-unit-testing
import {describe, expect, it, xit, inject, beforeEachProviders} from 'angular2/testing';
import{WelcomeComponent} from '../app/home/welcome.component';
import {LoginFormComponent} from '../app/shared/loginform.component'

    describe ('Welcome', () =>{
        beforeEachProviders(() => [
            WelcomeComponent,
            LoginFormComponent
        ]);
        
        it('should welcome', () => {
            let theDisplay = new WelcomeComponent();
            expect(theDisplay.pageTitle).toHaveText('Welcome');
        });


        // describe("another test", function() {

        // beforeEachProviders(function() {
        //     this.welcome = new WelcomeComponent();
        // });

        // it("should say hello", function() {
        //     //expect(hello.message.toEqual("hey"));
        //     expect(this.welcome.pageTitle == "Welcome");

        // });




    });




