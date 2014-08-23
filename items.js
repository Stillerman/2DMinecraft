
function getBlock(id){
	switch(id){
		case 1:
			return blocks.stone;
		case 2:
			return blocks.dirt;
		case 34:
			return blocks.coal;
		case 33:
			return blocks.iron;
		case 32:
			return blocks.gold;
		case 50:
			return blocks.diamond;
		case 238:
			return blocks.lava;
		case "skip":
			return blocks.skip;

	}
	return blocks.generic;
};

function pickaxe(name, harvestlevel, hits, img1, img2){
	this.harvestLevel = harvestlevel;
	this.hits = hits;
	this.img1 = img1;
	this.img2 = img2;
	this.name = name;
};
function block(block){
	this.type = "block";
	this.name = block.name;
	this.img1 = tilemapImageArray[block.id];
	this.img2 = tilemapImageArray[block.id];
	this.harvestLevel=0;
	this.hits = "inf"
	this.id = block.id;
}

var nothing = new pickaxe("Nothing", 0, "inf", IMG_nothing, IMG_nothing);
var diamondpick = new pickaxe("Diamond Pickaxe", 3, 100, IMG_pick_diamond, IMG_pick_diamond_2);
var goldpick = new pickaxe("Gold Pickaxe", 3, 30, IMG_pick_gold, IMG_pick_gold_2);
var ironpick = new pickaxe("Iron Pickaxe", 2, 100, IMG_pick_iron, IMG_pick_iron_2);
var stonepick = new pickaxe("Stone Pickaxe", 1, 50, IMG_pick_stone, IMG_pick_stone_2);

var picks = [diamondpick, goldpick, ironpick, stonepick];

var blocks = {
	skip: {harvestLevel: 100, placeOver: true, name:"air", id:"skip"},
	generic: {harvestLevel: 0, name:"idk"},
	stone: {harvestLevel: 1, name:"stone", id:1},
	dirt: {harvestLevel: 0, name:"dirt", id:2},
	coal: {harvestLevel: 1, name:"coal", id:34},
	iron: {harvestLevel: 1, name:"iron", id:33},
	gold: {harvestLevel: 2, name:"gold", id:32},
	diamond: {harvestLevel: 2, name:"diamond"},
	lava: {harvestLevel: 100, placeOver: true, name: "lava"}
};


var inventory = [stonepick, 3, diamondpick, 1, ironpick, 7, goldpick, 6, new block(getBlock(32)), 1, new block(blocks.iron), 1];
