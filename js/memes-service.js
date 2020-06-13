'use strict';

// const KEY = gMemes;
var gMemes = []
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
                lineHeight: 45
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
    gMeme.lines.splice(1, 0, line);
    drawMeme(getMeme().selectedImgId);
}

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}

function getImgById(imgId) {
    var img = getImgs().find(img => imgId === img.id);
    return img
}


function getMeme() {
    return gMeme
}

function drawText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function switchLine() {
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
    drawCanvas();
}

function addTextLine() {
    if (gMeme.lines.length === 3) return
    createLine()
}

function removeTextLine() {
    gMeme.lines.splice([gMeme.selectedLineIdx], 1);
    drawMeme(getMeme().selectedImgId);
    gMeme.selectedLineIdx = 0;
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    drawMeme(getMeme().selectedImgId);
}

function setFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font;
}

function changeLineHeight(diff) {
    var canvas = getCanvas()
    if (gMeme.lines[gMeme.selectedLineIdx].lineHeight + diff <= 25 ||
        gMeme.lines[gMeme.selectedLineIdx].lineHeight + diff >= canvas.height - 2) return
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
    var currLineIdx = gMeme.lines.findIndex(line => {
        if (y <= line.lineHeight && y >= line.lineHeight - line.size) return line;
    });
    if (currLineIdx !== -1) {
        gMeme.selectedLineIdx = currLineIdx;
        focusOnLine(currLineIdx);
    }
    drawCanvas();
}

function focusOnLine(lineIdx) {

}

function setAlignText(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align;
    drawMeme(getMeme().selectedImgId);
}

function saveMeme() {
    
}

function _saveMemeToLocalStorage(key, gMemes) {
    saveToLocalStorage(key, gMemes);
}

function getMemeFromLocal(){
    
}