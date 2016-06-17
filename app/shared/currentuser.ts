// export class UserProfile{
//    public username:  string;
// }


// // private _isLoggedIn: Boolean;
//   //  private _username: string;
//    // private _token: string;
   
   

// export class CurrentUser{
//    private _userProfile: UserProfile;
    
//     constructor(){}
    
//    get userProfile(): CurrentUser{
//        return this._userProfile;
//    }
   
//    set userProfile(): CurrentUser{
//        this._userProfile.username
//    }
    
// }

function currentUser (){
    var profile = {
        isLoggedIn: false,
        username: "",
        token: ""
    }
    
    var setProfile = function(username, token){
        profile.username = username;
        profile.token = token;
        profile.isLoggedIn = true;
    }
    
    var getProfile = function(){
        return profile;
    }
    
    return{ setProfile: setProfile,
            getProfile: getProfile}
    
}