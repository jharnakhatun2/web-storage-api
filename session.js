
function setUserName(key, value) {
    sessionStorage.setItem(key, value);
}
function getUserName(key) {
    alert(sessionStorage.getItem(key));
}
function setName(key, value) {
    sessionStorage.setItem(key, value);
}
function getName(key) {
    alert(sessionStorage.getItem(key));
}

function removeOneItem(key) {
    sessionStorage.removeItem(key);
}

function deleteAll() {
    sessionStorage.clear();
}