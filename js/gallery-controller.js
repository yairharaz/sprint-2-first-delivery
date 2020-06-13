'use strict';

var gIsShowMore = false;

function renderGallery() {
    const imgs = getImgs();
    var strHTML;
    if (!imgs || imgs.length === 0) strHTML = `NO IMAGES TO SHOW!`;
    else {
        strHTML = imgs.map(img => {
            return `<img id="${img.id}" src="${img.url}" onclick="onChooseImg(this.id)" />`
        }).join('');
        document.querySelector('.memes-gallery').innerHTML = strHTML;
    }
}

function onRevealGallery() {
    var elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'block';
    setFilterByKeyword('all');
    var elMemeCreator = document.querySelector('.memes-creator-container');
    elMemeCreator.style.display = 'none';
}

function renderKeywords() {
    const keywords = getKeywords();
    var strHTML = `<a id="all" href="#" onclick="onSetFilterByKeyword(this.id)">All</a>`
    var numOfKeywordsToShow = getKeywordsToShow();
    var count = 1;
    for (let key in keywords) {
        var size = keywords[key] / 10 + 1 + 'rem';
        if (count > numOfKeywordsToShow) strHTML += '';
        else strHTML += `<a id="${key}" href="#" onclick="onSetFilterByKeyword(this.id)" style="font-size:${size}">${key}</a>`
        count++;
    }
    strHTML += `<a class="show-more" href="#" onclick="onShowMore(event)">show more...</a>`
    document.querySelector('.gallery-nav').innerHTML = strHTML;
}

function onSetFilterByKeyword(keyword) {
    setFilterByKeyword(keyword);
}

function onSetFilterBySearch(word){
    console.log(word);
    word = word.toLowerCase();
    var keywords = getKeywords();
    if (!keywords[word]) return;
    else setFilterByKeyword(word);
}

function onShowMore(){
    showMore(gIsShowMore);
    if (!gIsShowMore) {
        document.querySelector('.show-more').innerText = 'hide...';
    }else{
        document.querySelector('.show-more').innerText = 'show more...';
    }
    gIsShowMore = !gIsShowMore;
}