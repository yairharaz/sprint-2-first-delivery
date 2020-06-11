'use strict';

const KEY = gMemes;
var gMemes = []
var gImgs = [
    { id: 1, url: 'imgs/1.jpg', keywords: [] },
    { id: 2, url: 'imgs/2.jpg', keywords: [] },
    { id: 3, url: 'imgs/3.jpg', keywords: [] },
    { id: 4, url: 'imgs/4.jpg', keywords: [] },
    { id: 5, url: 'imgs/5.jpg', keywords: [] },
    { id: 6, url: 'imgs/6.jpg', keywords: [] },
    { id: 7, url: 'imgs/7.jpg', keywords: [] },
    { id: 8, url: 'imgs/8.jpg', keywords: [] },
    { id: 9, url: 'imgs/9.jpg', keywords: [] },
    { id: 10, url: 'imgs/10.jpg', keywords: [] },
    { id: 11, url: 'imgs/11.jpg', keywords: [] },
    { id: 12, url: 'imgs/12.jpg', keywords: [] },
    { id: 13, url: 'imgs/13.jpg', keywords: [] },
    { id: 14, url: 'imgs/14.jpg', keywords: [] },
    { id: 15, url: 'imgs/15.jpg', keywords: [] },
    { id: 16, url: 'imgs/16.jpg', keywords: [] },
    { id: 17, url: 'imgs/17.jpg', keywords: [] },
    { id: 18, url: 'imgs/18.jpg', keywords: [] }
];

var gMeme;

function createMeme(imgId) {
    var canvas = getCanvas()
    var meme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Insert Text Here',
                size: 35,
                align: 'center',
                color: 'red',
                strokeColor: 'white',
                font: 'impact',
                lineHeight: 35
            },
            {
                txt: 'Insert Text Here',
                size: 30,
                align: 'center',
                color: 'green',
                strokeColor: 'white',
                font: 'impact',
                lineHeight: canvas.height - 25
            }
        ]
    }

    gMeme = meme;
}

function createLine() {
    let line = {
        txt: 'Insert Text Here',
        size: 35,
        align: 'center',
        color: 'yellow',
        strokeColor: 'black',
        font: 'impact',
        lineHeight: canvas.height / 2
    }
    gMeme.lines.splice(1, 0, line)
}

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}

function getImgById(imgId) {
    var img = gImgs.find(img => imgId === img.id);
    return img
}

function getImgs() {
    return gImgs
}

function getMeme() {
    return gMeme
}
function drawText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
    console.log(gMeme.lines[gMeme.selectedLineIdx].txt);

}

function switchLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
}

function addTextLine() {
    if (gMeme.lines.length === 3) return
    createLine()
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    console.log(gMeme.lines[gMeme.selectedLineIdx].size);
    drawMeme(getMeme().selectedImgId);
}

function setFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function changeLineHeight(diff) {
    var canvas = getCanvas()
    if (gMeme.lines[gMeme.selectedLineIdx].lineHeight + diff <= 10 || gMeme.lines[gMeme.selectedLineIdx].lineHeight + diff >= canvas.height) return
    gMeme.lines[gMeme.selectedLineIdx].lineHeight += diff;
    drawMeme(getMeme().selectedImgId);
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function canvasClicked(ev) {
    const { offsetX: x, offsetY: y } = ev;
    console.log(x, y);

}

function saveMeme(meme) {
    gMemes.push(meme)
    _saveMemeToLocalStorage(KEY,gMemes);
}




function _saveMemeToLocalStorage(KEY,gMemes){
    saveToLocalStorage(KEY,gMemes);
}