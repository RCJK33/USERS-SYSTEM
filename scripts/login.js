function login() {
    var email = $('#email')
    var password = $('#password')
    var users = readUser();
    for (let i = 0; i < users.length; i++) {
        if ((users[i].email === email.val()) && (users[i].password === password.val())) {
            email.css({'background-color':'Green'});
            password.css({'background-color':'Green'});
            return;
        }
    }
    alert("The user does not exist")
}

function init() {
    $("#btn-login").click(login);
}

window.onload = init