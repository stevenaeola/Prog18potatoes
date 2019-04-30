// check if an access token shows logged in
// this would be the real code

function login(token){
    //  probably need to send the token off to an external service here
    console.log('Doing the real login check here with token ' + token);
    return true;
}

module.exports = login;
