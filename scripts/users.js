
function usersActi() {
    var users = readUser();
    console.log(users);
    var rows = "";

    for (let i = 0; i < users.length; i++) {
        rows += `
            <tr class="tr">
                
                <td class="table-rows"><p>${users[i].email}</p></td>
                <td class="table-rows"><p>${users[i].password}</p></td>
                <td class="table-rows"><p>${users[i].fname}</p></td>
                <td class="table-rows"><p>${users[i].lname}</p></td>
                <td class="table-rows"><p>${users[i].age}</p></td>
                <td class="table-rows"><p>${users[i].address}</p></td>
                <td class="table-rows"><p>${users[i].phone}</p></td>
                <td class="table-rows"><p>${users[i].payment}</p></td>
                <td class="table-rows" style="background-color: ${users[i].color};"></td>
                    
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