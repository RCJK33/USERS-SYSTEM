function init() {
    console.log("Listing the users")
    let userList = readUser();
    console.log(userList);
}

window.onload = init;