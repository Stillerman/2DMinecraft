
var mousex = 330;
var mousey = 130;
var currentBlock = 4;

var player = {
	head:IMG_player_head,
	body:IMG_player_body,
	x: 330,
	y: 130,
	left: false,
	right: false,
	up: false,
	down: false,
	jumping: false,
	falling: false,
	jumpcount: 0,
	speed: 10,
	equipt: inventory[currentBlock/2],
	counter: 0,
	getTile: function(){
		return(getTileAt(player.x/10, player.y/10+2))
	},
	getFeet: function(){
		return[player.x/10, player.y/10 + 1];
	},
	getItem: function(){
		return player.equipt.name;
	},
	getHarvestLevel: function(){
		return player.equipt.harvestLevel;
	},
	draw: function(){
		var theimg
		drawInv();
		if(player.down){theimg=player.equipt.img2;}
		else{theimg=player.equipt.img1;}
		ctx.drawImage(IMG_aim, mousex, mousey, 10, 10);
		ctx.drawImage(theimg, player.x + 8, player.y+11, 10, 10);
		ctx.drawImage(player.head, player.x, player.y, 10, 10);
		ctx.drawImage(player.body, player.x, player.y+10-player.counter, 10, 10);
		if(player.left || player.right){
		player.counter ++;
		if(player.counter == 2){player.counter = 0;}}
		else{
			player.counter=0;
		}
	}
}


start();

function drawInv(){
	ctx.drawImage(IMG_inv, 0 + totalShiftx, 0 + totalShifty, 300, 40);
	for(var i =0; i<inventory.length; i+=2){
		ctx.drawImage(inventory[i].img1, i*15+totalShiftx+15, 8+totalShifty, 25, 25)
	}
}

function main(){
	
	shiftx = 0;
	shifty = 0;
	if(player.jumping & player.jumpstep < 3){shifty+=10; player.jumpstep++;}
	else{player.jumping = false; player.jumpstep = 0;}

	if(!isOnGround() & !player.jumping){player.falling = true; shifty-=5;}
	else{player.falling=false;}

	if(player.right & canMove(player.getFeet(), 1)){shiftx += -player.speed}
	if(player.left  & canMove(player.getFeet(), -1)){shiftx += player.speed}
	if(player.up & !player.jumping & isOnGround()){player.jumping = true;}
	if(player.down){placeBlock();}
	
	

	shift(shiftx, shifty);
	player.draw();
}
function start(){
	genLevel();
	map();
	interval = window.setInterval(main, 40);
	
}




function redraw(){
	ctx.clearRect(-100,-100,80000,50000);
	map()
}

function shift(x, y){
	background[0] -= x/1.346;
	background[1] -= y/1.5;
	player.x -= x;
	player.y -= y;
	mousex -= x;
	mousey -= y;
	totalShiftx -= x;
	totalShifty -= y;
	ctx.translate(x, y);
	redraw();
}

function canMove(d, num){
		var raa = 0;
		if(player.falling){raa = 1;}
		if(getTileAt(d[0]+ num, d[1]+raa) == "skip" &
		   getTileAt(d[0]+ num, d[1]-1) == "skip"){
			return true;
		}
	
	return false;
}

function map(){
		
	startTileMap(tilemap, tilemapImageArray);
}
//left  37
//right 39  
//up    38
//down  40
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var c = evt.keyCode || evt.which;
    if(c == 37){player.left = true}
    if(c == 38){player.up = true}
    if(c == 39){player.right = true}
    if(c == 40){player.down = true}
    if(c == 68){mousex += 10}
    if(c == 65){mousex -= 10}
    if(c == 83){mousey += 10}
    if(c == 87){mousey -= 10}
    if(c == 69){placeBlock();}
    if(c == 81){destroy();}
    if(c == 70){player.equipt = picks[0]}
    if(c >= 49 & c<= 57){

    	num = c - 48 -1;
    	//alert("alert Pressed " + num);
    	currentBlock = num*4;
    	player.equipt = inventory[currentBlock/2];
    }
   // alert(c);
    
};

function placeBlock(){
	if(inventory[currentBlock/2].type == "block"){
		if(getBlock(tilemap[getIndex(mousex/10, mousey/10)]).placeOver){
			tilemap[getIndex(mousex/10, mousey/10)] = inventory[currentBlock/2].id;
		}
	}else{destroy();}
}

document.onkeyup = function(evt) {
    evt = evt || window.event;
    var c = evt.keyCode || evt.which;
    if(c == 37){player.left = false}
    if(c == 38){player.up = false}
    if(c == 39){player.right = false}
    if(c == 40){player.down = false}
};

function isOnGround(){
	ret = true;
	if(player.jumping){ret = false;}
	if(player.getTile() == "skip"){ret = false;}
	if(player.y % 10 != 0){ret =false}
	return ret;
	}

function destroy(){
	
	if(getBlock(tilemap[getIndex(mousex/10, mousey/10)]).harvestLevel <= player.getHarvestLevel()){
	
	tilemap[getIndex(mousex/10, mousey/10)] = "skip";}

}
/**
window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        mousey = Math.ceil(event.clientY / 10) * 10;
        mousex = Math.ceil(event.clientX / 10) * 10;
    }

window.addEventListener("mousedown", destroy, false);**/