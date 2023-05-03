//create the user constuctor
class User {
    constructor(email,pass,fname,lname,age,address,phone,payment,color){
        this.email = email;
        this.password = pass;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}

function validate(user) {
    let valid = true;

    // Check for empty elemnts
    if (user.email=="") {
        alert("Hey fill out the input")
        valid = false;
    }

    if (user.password=="") {
        alert("Hey fill out the pass")
        valid = false;
    }

    // Display alert()

    return valid;
}

// Create the register function
function register() {
    let inputEmail = $("#email").val()
    let inputPass = $("#password").val()
    let inputFName = $("#firstName").val()
    let inputLName = $("#lastName").val()
    let inputAge = $("#age").val()
    let inputAddress = $("#address").val()
    let inputPhone = $("#phone").val()
    let inputPayment = $("#txtPayment").val()
    let inputColor = $("#selColor").val()

    let newUser = new User(inputEmail,inputPass,inputFName,inputLName,inputAge,inputAddress,inputPhone,inputPayment,inputColor);
    if (validate(newUser)) {
        console.log(newUser);
        saveUser(newUser);
    }
    // display the newUser on the console
    //clear the form
    $('input').val("");
}

function validatePress() {
    let inputPass = $('#password');
    var password = inputPass.val();

    if (password.length < 8) {
        inputPass.css({'background-color':'red'});        
    } else {
        
        inputPass.css({'background-color':'green'});        
    }
}

function init() {
    $('.form-container').hide();
    $('.btn-add-form').click(function(){
        $('.form-container').slideDown(1000);
    });
    $('.btn-close-form').click(function(){
        $('.form-container').hide();
    });
    $('#password').keyup(validatePress);
}

window.onload = init