'use strict';

var gElCanvas;
var gCtx;

function onInit() {
    gElCanvas = document.querySelector('#canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery();
    // resetMeme()
}

function drawMeme(imgId) {
    var img = getImgById(+imgId);
    console.log(img);    
    drawImgFromlocal(img)
    
}
function drawCanvas(){
    var meme = getMeme()  
    console.log('after image');
    meme.lines.forEach(line => {
        gCtx.strokeStyle = line.strokeColor;       
        gCtx.fillStyle = line.color;
        gCtx.font = `${line.size}px ${line.font}`;
        gCtx.textAlign = line.align;
        gCtx.fillText(line.txt.toUpperCase(), gElCanvas.width / 2, line.lineHeight);
        gCtx.strokeText(line.txt.toUpperCase(), gElCanvas.width / 2, line.lineHeight);
        
    })
}

function onSetStrokeColor(color){
    setStrokeColor(color)
}

function onSetFillColor(color){
    setFillColor(color)
}

function onChooseImg(imgId) {
    var img = getImgById(+imgId);
    drawImgFromlocal(img);
    var elMemeCreator = document.querySelector('.memes-creator-container');
    elMemeCreator.style.display = 'flex';
    var elGallery = document.querySelector('.gallery-container');
    elGallery.style.display = 'none';
    createMeme(imgId);
    console.log(getMeme());
    drawMeme(getMeme().selectedImgId) 
    
}

function drawImgFromlocal(img) {
    var elImg = new Image();
    elImg.src = img.url;
    elImg.onload = () => {
        console.log('img loaded');
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawCanvas();
    }  
}

function onDrawText(txt) {
    console.log('draw text');
    drawText(txt);
    drawMeme(getMeme().selectedImgId,txt) 
}

// drawMeme(gMeme.selectedImgId)  


function getCanvas(){
    return gElCanvas
}

function onSwitchLine() {
    switchLine();
}

function onAddingTextLine(){
    addTextLine();
}

function onChangeFontSize(diff) {
    changeFontSize(diff);
}

function onChangeLineHeight(diff){
    changeLineHeight(diff)
}

function onSetFontFamily(font){
    setFontFamily(font);
}

