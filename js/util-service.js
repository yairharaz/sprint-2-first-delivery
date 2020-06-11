'use strict';
function saveToLocalStorage(KEY,val){
    var json = JSON.stringify(val)
    localStorage.setItem(KEY,json);
}

function getFromLocalStorage(KEY){
    var memes = JSON.parse(localStorage.getItem(KEY));
    return memes
}