//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;

let largeflower = 20; //changes large petal size
let middlesquare = 209; //changes the colour of the middle square
let centrecircle = 17; //changes center circle size
let cornercircles = 199; //changes the colour of the corner circles 
let boarder = 20; // changes boarder size
let drawmiddlecircle = true //adds middle circle

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
  angleMode(DEGREES)

}

function wallpaper_background() {
  background(186, 218, 229); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//main boarder
//boarderstroke(41, 89, 137,)
stroke(41, 89, 137);
fill(41, 89, 137);
rect(0, 0, boarder, 200);
rect(0, 180, 200, boarder);
rect(0, 0, 200, boarder);
rect(180, 0, boarder, 200);

//small outside boarder
stroke(240, 199, 72); //colour for half circles
line(0, 0, 20, 0);
line(0, 0, 0, 20);
line(180, 0, 200, 0);
line(200, 0, 200, 20);
line(0, 180, 0, 200);
line(0, 200, 20, 200);
line(180, 200, 200, 200);
line(200, 180, 200, 200);

stroke(middlesquare, 247, 229) //colour for large petals
line(25, 0, 65, 0)
line(0, 25, 0, 65)
line(135, 0, 175, 0)
line(200, 25, 200, 65)
line(0, 135, 0, 175)
line(25, 200, 65, 200)
line(135, 200, 175, 200)
line(200, 135, 200, 175)

stroke(240, 199, 72) //colour for small circles
line(95, 0, 105, 0)
line(95, 200, 105, 200)
line(0, 95, 0, 105)
line(200, 95, 200, 105)

stroke(239, 127, 120) //colour for small petals
line(75, 0, 90, 0)
line(110, 0, 125, 0)
line(0, 75, 0, 90)
line(0, 110, 0, 125)
line(75, 200, 90, 200)
line(200, 90, 200, 75)
line(110, 200, 125, 200)
line(200, 110, 200, 125)

//middle sqaure
stroke(240, cornercircles, 72)
fill(middlesquare, 247, 229);
rect(20, 20, 160, 160);

//large boarder petals
stroke(middlesquare, 247, 229);
arc(45, 0, 40, 20, 0, 180);
arc(155, 0, 40, 20, 0, 180);
arc(45, 200, 40, 20, 180, 0)
arc(155, 200, 40, 20, 180, 0);
arc(0, 45, 20, 40, 270, 90)
arc(0, 155, 20, 40, 270, 90)
arc(200, 45, 20, 40, 90, 270)
arc(200, 155, 20, 40, 90, 270)

//small circles
stroke(240, 199, 72)
fill(240, 199, 72)
arc(100, 0, 10, 10, 0, 180)
arc(100, 200, 10, 10, 180, 0)
arc(0, 100, 10, 10, 270, 90,)
arc(200, 100, 10, 10, 90, 270)

//middle circle
if (drawmiddlecircle == true) {
ellipse( 100, 100, centrecircle, centrecircle)}

//small boarder petals
stroke(239, 127, 120)
fill(239, 127, 120)
arc(82.5, 0, 15, 7.5, 0, 180)
arc(117.5, 0, 15, 7.5, 0, 180)
arc(82.5, 200, 15, 7.5, 180, 0)
arc(117.5, 200, 15, 7.5, 180, 0)
arc(0, 82.5, 7.5, 15, 270, 90)
arc(0, 117.5, 7.5, 15, 270, 90)
arc(200, 82.5, 7.5, 15, 90, 270)
arc(200, 117.5, 7.5, 15, 90, 270)

//large centre flower 
stroke(149, 154, 225)
fill(149, 154, 225)
ellipse(100, 55, largeflower, 65)
ellipse(100, 145, largeflower, 65)
ellipse(55, 100, 65, largeflower)
ellipse(145,100, 65, largeflower)

//corner circles 
stroke(240, 199, 72)
fill(240, cornercircles, 72)
arc(0, 0, 40, 40, 0, 90)
arc(200, 0, 40, 40, 90, 180)
arc(0, 200, 40, 40, 270, 360)
arc(200, 200, 40, 40, 180, 270)

//large angled petals
stroke(134, 182, 193)
strokeWeight(1)
fill(134, 182, 193)
fill(134, 182, 193)
rotate(-45)
ellipse(0, 200, 25, 60)
rotate(90)
ellipse(142.5, 57.5, 25, 60)
ellipse(141.5, -57.5, 25, 60)
rotate(-90)
ellipse(0, 82.5, 25, 60)

}



