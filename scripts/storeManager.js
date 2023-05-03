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
        let objList = JSON.parse(user); // Parse back ther string to into array
        return objList;
    }
}