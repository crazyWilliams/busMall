'use strict';

/*
build something that will 

tracks voted pictures clicked counts

 - select 3 random photos -
 - an array of 25 images(start with three img)


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
 var leftImage = document.getElementById('left_image');
 var rightImage = document.getElementById('right_image');
 var centerImage = document.getElementById('center_image');

function handleClickOnLeftImage(event){
  // increment left image clicks
  console.log('clicked on left image')
}

function handleClickOnRightImage(event){
  // increment right image clicks
  console.log('clicked on right image')
}

function handleClickOnCenterImage(event){
  // increment center image clicks
  console.log('clicked on center image')
}

 leftImage.addEventListener('click', handleClickOnLeftImage);

 rightImage.addEventListener('click', handleClickOnRighImage);

 centerImage.addEventListener('click', handleClickOnCenterImage);
 

new imageInfo('bag.jpg', 'starwars bag');
new imageInfo('banana.jpg', 'banana');
new imageInfo('bathroom.jpg', 'bathroom');




