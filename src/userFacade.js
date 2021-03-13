const URL = "http://localhost:3333/api/users"
const users = getUsers();

function addUser(user) {
    users.push(user);
}

function getUserById(id) {
    if (id < users.length && id > 0) {
        return users[id];
    }
    return "There is no user with that Id"

}

function getUsers() {
    let users;
    return fetch(URL)
        .then(response => response.json())
}

function editUser(user) {

}

function deleteUser(id) {

}



/* Make sure you understand what we create here, it involves VITAL JavaScript knowledge */
const userFacade = {
    addUser,
    getUserById,
    getUsers,
    editUser,
    deleteUser

}



export default userFacade;