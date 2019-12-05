'use strict';

fetch("users.json")

    .then(parseData)
    .then(logData)
    .catch(onLoadUsersReject);

function parseData(response) {
return response.json();
}
function onLoadUsersReject(response) {
    console.log(response);

}

function logData(data) {
    console.log(data);
}

async function loadUsers() {

    const response = await fetch("users.json");
    const users = await  response.json();
    console.log(users);
}
