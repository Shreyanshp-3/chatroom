const users = [];

// join user to chat

function userJoin(id, username, room) {
    const user = { id, username, room };
    users.push(user);
    console.log(user)
    
    return user;
}



// get the current user
function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

// userleaves the chat
function userleaves(id) {

    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

// get room users
function getRoomUsers(room) {

    return users.filter(user => user.room === room)
}


module.exports = {
    userJoin,
    getCurrentUser,
    userleaves,
    getRoomUsers

}
