'use strict';

function renderGallery() {
    const imgs = getImgs();
    let strHTML = imgs.map(img => {
        return `<img id="${img.id}" src="${img.url}" onclick="onChooseImg(this.id)" />`
    }).join('');
    document.querySelector('.memes-gallery').innerHTML = strHTML;
}

function onRevealGallery(){
    var elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'block';
    var elMemeCreator = document.querySelector('.memes-creator-container');
    elMemeCreator.style.display = 'none';
}