'use strict';

var gFilterBy = '';
var gKeywords = createKeyWords();
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: ['person', 'politics', 'angry', 'famous'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['animal', 'cute', 'love'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['animal', 'kid', 'cute', 'sleep'] },
    { id: 4, url: 'imgs/4.jpg', keywords: ['animal', 'cute', 'sleep'] },
    { id: 5, url: 'imgs/5.jpg', keywords: ['person', 'kid'] },
    { id: 6, url: 'imgs/6.jpg', keywords: ['person', 'movie'] },
    { id: 7, url: 'imgs/7.jpg', keywords: ['person', 'kid', 'cute'] },
    { id: 8, url: 'imgs/8.jpg', keywords: ['person', 'happy', 'actor', 'movie'] },
    { id: 9, url: 'imgs/9.jpg', keywords: ['person', 'happy', 'kid', 'cute'] },
    { id: 10, url: 'imgs/10.jpg', keywords: ['person', 'happy', 'politics', 'famous'] },
    { id: 11, url: 'imgs/11.jpg', keywords: ['person', 'sports', 'love'] },
    { id: 12, url: 'imgs/12.jpg', keywords: ['person', 'tv', 'famous'] },
    { id: 13, url: 'imgs/13.jpg', keywords: ['person', 'happy', 'actor', 'movie', 'famous'] },
    { id: 14, url: 'imgs/14.jpg', keywords: ['person', 'actor', 'movie', 'famous'] },
    { id: 15, url: 'imgs/15.jpg', keywords: ['person', 'actor', 'movie'] },
    { id: 16, url: 'imgs/16.jpg', keywords: ['person', 'actor', 'movie', 'famous'] },
    { id: 17, url: 'imgs/17.jpg', keywords: ['person', 'politics', 'famous'] },
    { id: 18, url: 'imgs/18.jpg', keywords: ['movie', 'happy', 'kid'] }
];

function createKeyWords() {
    var keywords = getFromLocalStorage('keyword');
    if (!keywords) {
        keywords = {
            'person': 0, 'animal': 0, 'happy': 0, 'politics': 0,
            'actor': 0, 'kid': 0, 'cute': 0, 'movie': 0, 'tv': 0,
            'sports': 0, 'angry': 0, 'famous': 0, 'love': 0, 'sleep': 0
        };
    }
    return keywords
}

var gNumOfKeywords;

function getNumOfKeywords() {
    var count = 0
    for (let key in gKeywords) count++;
    gNumOfKeywords = count;
}

var gKeywordsToShow = 5;

function getImgs() {
    if (gFilterBy === '' || gFilterBy === 'all') return gImgs;
    var img = gImgs.filter(img => img.keywords.includes(gFilterBy))
    return img

}

function setFilterByKeyword(keyword) {    
    keyword = keyword.toLowerCase();
    if (keyword !== 'all') gKeywords[keyword] += 1;
    gFilterBy = keyword.toLowerCase();
    renderGallery();
    renderKeywords();
    saveToLocalStorage('keyword', gKeywords)
}

function getKeywords() {
    return gKeywords;
}
function getKeywordsToShow() {
    return gKeywordsToShow;
}
function showMore(isShowMore) {
    if (!isShowMore) {
        gKeywordsToShow = gNumOfKeywords;
        renderKeywords();
    } else {
        gKeywordsToShow = 5;
        renderKeywords();
    }
}

function toggleMenu(){
    document.body.classList.toggle('menu-open');
}
