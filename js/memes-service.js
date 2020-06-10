'use strict';

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
                size: 30,
                align: 'center',
                color: 'white',
                strokeColor: 'black',
                lineHeight: 25
            },
            // {
            //     txt: 'Insert Text Here',
            //     size: 30,
            //     align: 'center',
            //     color: 'white',
            //     strokeColor: 'black',
            //     lineHeight: canvas.height-25
            // }
        ]
    }

    gMeme = meme;
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
}

function switchLine() {
    console.log('switch');
    gMeme.selectedLineIdx++;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0;
}

function changeFontSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    console.log(gMeme.lines[gMeme.selectedLineIdx].size);
    
}