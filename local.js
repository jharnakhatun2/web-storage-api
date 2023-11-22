function setUserName(key, value) {
    localStorage.setItem(key, value);
}
function getUserName(key) {
    alert(localStorage.getItem(key));
}
function setName(key, value) {
    localStorage.setItem(key, value);
}
function getName(key) {
    alert(localStorage.getItem(key));
}

function removeOneItem(key) {
    localStorage.removeItem(key);
}

function deleteAll() {
    localStorage.clear();
}