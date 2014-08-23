//document.getElementById('inner').innerHTML='<canvas id="canvasBg" width="'+ 800+'" height="'+ 500 +'" style="background:black";>';
var canvas1 = document.getElementById('canvasBg');

var ctx = canvas1.getContext("2d");
ctx.canvas.width  = window.innerWidth-20;
 ctx.canvas.height = window.innerHeight-20;
var scale = 2;
ctx.scale(scale,scale);


var tilesize = 10;
var background = [-100, -400, 1186*2, 942*2];

var totalShiftx = 0;
var totalShifty = 0;

//code 
//window.onload = startTileMap();


function startTileMap(tilemap, tilemapImageArray){
ctx.drawImage(IMG_back, background[0], background[1], background[2], background[3]);
ctx.drawImage(IMG_back, background[2], background[3], background[2]*2, background[3]*2);
for(var i = 0; i < tilemap.length; i++){
//	alert("colum: " + (i%numx) + "row: " + Math.floor((i/numx)));
	if(tilemap[i] != "skip" & isOnScreen(i)){
	drawTile(tilemapImageArray, tilemap[i], (i%numx), Math.floor((i/numx)));
}
}
}

function drawTile(tilemapImageArray, tiletype, column, row){
	
	ctx.drawImage(tilemapImageArray[tiletype], column*tilesize, row*tilesize, 10, 10);
}

function getTileAt(column, row){
	return(tilemap[((row*numx) + column)]);
}

function getIndex(column, row){
	return(((row*numx) + column));

}

function isOnScreen(i){
	screenlen = Math.ceil(ctx.canvas.width/(10*scale))+1
	
	cutLeft = totalShiftx/10;
	if(i%numx < cutLeft & i%numx>0){return false;}
	if(i%numx > screenlen + totalShiftx/10){return false;}
	return true;
}