function login() {
    var email = $('#email').val()
    var password = $('#password').val()
    var users = readUser();
    for (let i = 0; i < users.length; i++) {
        if ((users[i].email === email) && (users[i].password === password)) {
            console.log("The user is correct")
            return;
        }
    }
    console.log("The user is not correct")
}

function init() {
    $("#btn-login").click(login());
}

window.onload = init