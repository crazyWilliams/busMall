'use strict';

/*
build something that will 

tracks voted pictures clicked counts

 - select 3 random phots
 - an array of 25 images(start with three img)
XXX array of clicks [0, 0, 0]

 array of object, 
 -[{Pic}, {Pic}]
 - pic object:
  {image url: "picture name.jpg,
   clicks: 0,
name: name of pic,
}
  - listen for an event ('click')
  while(votes < 25 )
 - randomly selected three new photos from libary
 - display them side by side 
 - make pic's clickable
 -track those clicks (increment)
 -track how man times img is displayed on side to not repeat so much 
 - 

*/
//========================================================//


// global variables 
// counter for num of clicks
var likeCounter = 0;
var allImages = [];

//==========================================================//
//   Constructor
// =========================================================//

var imageInfo = function(url, name){
  
  this.imageUrl = url;
  this.name = name;
  this.clicks = 0;

  allImages.push(this);
};

//==============================================================//
//   Initialize the Page
//==============================================================//

new imageInfo('bag.jpg', 'starwars bag');
new imageInfo('banana.jpg', 'banana');
new imageInfo('bathroom.jpg', 'bathroom');




