'use strict';
function saveToLocalStorage(key,val){
    var json = JSON.stringify(val)
    localStorage.setItem(key,json);
}

function getFromLocalStorage(key){
    var json = JSON.parse(localStorage.getItem(key));
    return json
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  