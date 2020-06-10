'use strict';

var gElCanvas;
var gCtx;

function onInit() {
    gElCanvas = document.querySelector('#canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery();
}

function drawMeme() {

    const meme = getMeme()    
    meme.lines.forEach(line => {
        gCtx.font = line.size + 'px impact';
        gCtx.textAlign = line.align;
        gCtx.fillStyle = line.color;
        gCtx.strokeStyle = line.strokeColor;       
        gCtx.fillText(line.txt.toUpperCase(), gElCanvas.width / 2, line.lineHeight);
        gCtx.strokeText(line.txt.toUpperCase(), gElCanvas.width / 2, line.lineHeight);
    })
}


function onChooseImg(imgId) {
    var img = getImgById(+imgId);
    drawImgFromlocal(img);
    var elMemeCreator = document.querySelector('.memes-creator-container');
    elMemeCreator.style.display = 'block';
    var elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'none';
    createMeme();
    drawMeme();
}

function drawImgFromlocal(img) {
    var elImg = new Image();
    elImg.src = img.url;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }  
}

function onDrawText(txt) {
    drawText(txt);
    drawMeme()
}

function setInputText() {
    let elLineInput = document.querySelector('[name="lineText"]');
    elLineInput.value = getMeme().lines[getMeme().selectedLineIdx].txt;
    elLineInput.focus()
}

function getCanvas(){
    return gElCanvas
}

function onSwitchLine() {
    switchLine();
}
function onChangeFontSize(diff) {
    changeFontSize(diff);
}
