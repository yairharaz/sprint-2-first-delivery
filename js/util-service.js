'use strict';
function saveToLocalStorage(key,val){
    var json = JSON.stringify(val)
    localStorage.setItem(key,json);
}

function getFromLocalStorage(key){
    var json = JSON.parse(localStorage.getItem(key));
    return json
}