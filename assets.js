//player
var IMG_player_head = new Image();
var IMG_player_body = new Image();
var IMG_aim = new Image();
IMG_player_body.src = "player_body.png";
IMG_player_head.src = "player_head.png";
IMG_aim.src = "aim.png"
//backgorund
var IMG_inv = new Image();
IMG_inv.src = "inventory_bg.png"
var IMG_back = new Image();
IMG_back.src = "back.png"
//items
var IMG_nothing = new Image();
var IMG_pick_diamond = new Image();
var IMG_pick_diamond_2 = new Image();
var IMG_pick_gold = new Image();
var IMG_pick_gold_2 = new Image();
var IMG_pick_iron = new Image();
var IMG_pick_iron_2 = new Image();
var IMG_pick_stone = new Image();
var IMG_pick_stone_2 = new Image();

IMG_nothing.src = "nothing.png";
IMG_pick_diamond.src = "pickaxe_diamond.png";
IMG_pick_diamond_2.src = "pickaxe_diamond_2.png";
IMG_pick_gold.src = "pickaxe_gold.png";
IMG_pick_gold_2.src = "pickaxe_gold_2.png";
IMG_pick_iron.src = "pickaxe_iron.png";
IMG_pick_iron_2.src = "pickaxe_iron_2.png";
IMG_pick_stone.src = "pickaxe_stone.png";
IMG_pick_stone_2.src = "pickaxe_stone_2.png";

var numx = 1500;
var tilemap = [];
var tilemapImageArray = [];

for(var i = 0; i < 256; i++){
	var imgg = new Image();
	imgg.src = "split/img" + i;
	tilemapImageArray[i] = imgg;
}

function genLevel(){
	var current_num = 0;
	var multiplier = 0;
	//air gen
	multiplier += 20;
	for(var i = current_num; i < numx*(multiplier); i++){
		tilemap[i] = "skip";
		current_num = i+1;
	}
	//grass gen
	multiplier ++;
	for(var i = current_num; i< numx*multiplier; i++){
		tilemap[i] = 3;
		current_num = i+1;
	}
	//dirt gen
	multiplier += 2;
	for(var i = current_num; i< numx*multiplier; i++){
		tilemap[i] = 2;
		current_num = i+1;
	}
	//stone gen
	multiplier += 60;
	for(var i = current_num; i < numx*multiplier; i++){

		tilemap[i] = 1
		if(i < numx*(multiplier-56)){
			if(Math.random()<0.4)tilemap[i] = 2;
		}


		if(Math.random()<0.03){tilemap[i] = 34;}  //coal
		if(Math.random()<0.007){tilemap[i] = 33;} //iron
		if(Math.random()<0.002){tilemap[i] = 32;} //gold
		if(Math.random()<0.0007){tilemap[i] = 50;}//diamond


		current_num = i +1;
	}
	//air gen
	multiplier += 6;
	for(var i = current_num; i< numx*multiplier; i++){
		tilemap[i] = "skip";
		if(i%numx<=2){tilemap[i] = 1;}
		current_num = i+1;
	}

	//lava gen
	multiplier += 20;
	for(var i = current_num; i< numx*multiplier; i++){
		tilemap[i] = 238;
		if(i%numx<=2){tilemap[i] = 1;}
		current_num = i+1;
	}

	//stone gen
	multiplier += 60;
	for(var i = current_num; i < numx*multiplier; i++){

		tilemap[i] = 1
		if(Math.random()<0.03){tilemap[i] = 34;}  //coal
		if(Math.random()<0.014){tilemap[i] = 33;} //iron
		if(Math.random()<0.04){tilemap[i] = 32;} //gold
		if(Math.random()<0.014){tilemap[i] = 50;}//diamond


		current_num = i +1;
	}



}


