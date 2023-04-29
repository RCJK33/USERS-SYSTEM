const KEY = 'users';

function saveUser(user) {  
    let oldUsers = readUser();
    oldUsers.push(user);
    console.log(oldUsers)

    let val = JSON.stringify(oldUsers);
    //console.log(val);
    localStorage.setItem(KEY,val);
}

function readUser() {
    let user = localStorage.getItem(KEY);
    if (!user) {
        // If you get here the LS is empty
        console.log("No Users.");
        return []; // creating the array
    } else {
        console.log("We have some users.")
        let objList = JSON.parse(user); // Parse back ther string to into array
        return objList;
    }




    /* $("#email").val() = pUser[0]
    $("#password").val() = pUser[1]
    $("#firstName").val() = pUser[2]
    $("#lastName").val() = pUser[3]
    $("#age").val() = pUser[4]
    $("#address").val() = pUser[5]
    $("#phone").val() = pUser[6]
    $("#txtPayment").val() = pUser[7]
    $("#selColor").val() = pUser[8] */
}