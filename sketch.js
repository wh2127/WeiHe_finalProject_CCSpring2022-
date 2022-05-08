let mc; let mc_cat1; let mc_cat2; let mc_punch;
let textbox; let font;
let movie; 
let mail; let mc_blob;
let room1; 

let page;
let i; let ts;
let oncreentxtx;
let txt;

function preload(){
	textbox = loadImage('images/textbox.png');
	font = loadFont('images/font.otf');
	
	movie = loadImage('images/movie.png');
	mail = loadSpriteSheet('images/mail.png', 1000,1000 , 2);
	mc_blob = loadSpriteSheet('images/mc_blob.png', 1000,1000 , 7);
	
	mc = loadImage('images/mc.png');
	//mc_cat1 = loadImage('images/mc_cat1.png');
	//mc_cat2 = loadImage('images/mc_cat2.png');
	//mc_punch = loadImage('images/mc_punch.png');
	
	room1 = loadImage('images/room1.png');
	
}

function setup(){
	createCanvas(1000,1000);
	page = 0;
	
	i = 0;
	y=0;
	ts = 0;
	onscreentxt = '';
}

function draw(){
	if (page == 0){
		image(movie, 0,0, 500,500);
		image(textbox, 25,350, 450,150);
		txt = "You are at home, in your room, watching classically cheesy romcoms."
		textSize(20);
		textFont(font);
		
		
		if (i>=txt.length){
			i=0;
		}
		else{
			typeWriter( txt , 55,395 );
			i++;
			
		}
	}
	
} 

function mousePressed(){
	

}

function typeWriter( txt , x,y){
	if (i < txt.length) {
		console.log(txt.charAt(i));
		onscreentxt += txt.charAt(i);
		console.log(onscreentxt);
		setTimeout( text(txt.charAt(i), x+textWidth(txt.charAt(i)),y), 2000);
		
	}

}


