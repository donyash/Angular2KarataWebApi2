System.register(['angular2/testing', '../app/home/welcome.component', '../app/shared/loginform.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, welcome_component_1, loginform_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (loginform_component_1_1) {
                loginform_component_1 = loginform_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Welcome', function () {
                testing_1.beforeEachProviders(function () { return [
                    welcome_component_1.WelcomeComponent,
                    loginform_component_1.LoginFormComponent
                ]; });
                testing_1.it('should welcome', function () {
                    var theDisplay = new welcome_component_1.WelcomeComponent();
                    testing_1.expect(theDisplay.pageTitle).toHaveText('Welcome');
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
        }
    }
});
//# sourceMappingURL=welcomespec.js.map