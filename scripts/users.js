
function usersActi() {
    var users = readUser();
    console.log(users);
    var rows = "";

    for (let i = 0; i < users.length; i++) {
        rows += `
            <tr class="tr">
                
                <td class="table-rows">${users[i].email}</td>
                <td class="table-rows">${users[i].password}</td>
                <td class="table-rows">${users[i].fname}</td>
                <td class="table-rows">${users[i].lname}</td>
                <td class="table-rows">${users[i].age}</td>
                <td class="table-rows">${users[i].address}</td>
                <td class="table-rows">${users[i].phone}</td>
                <td class="table-rows">${users[i].payment}</td>
                <td class="table-rows">${users[i].color}</td>
                    
            </tr>
        `;        
    }
    $("#table-content").html(rows);
}

function init() {
    console.log("Listing the users");
    let userList = readUser();
    console.log(userList);
}

window.onload = init;