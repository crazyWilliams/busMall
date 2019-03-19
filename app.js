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
 var leftImage = document.getElementById('leftImagePosition');
 var rightImage = document.getElementById('right_image');
 var centerImage = document.getElementById('center_image');

function handleClickOnLeftImage(event){
  //adding clicks
  likeCounter++;
  var rightImageIndex = Math.floor(Math.random() * allImages.length);
  var leftImageIndex = Math.floor(Math.random() * allImages.length);
  var centerImageIndex = Math.floor(Math.random() * allImages.length);
  
var left_Image = allImages[leftImageIndex];
var right_Image = allImages[rightImageIndex];
var center_Image = allImages[centerImageIndex];


  // stop after 25 clicks//
  if(likeCounter > 4){
    leftImage.removeEventListener('click', handleClickOnLeftImage);
    rightImage.removeEventListener('click', handleClickOnRightImage);
    centerImage.removeEventListener('click', handleClickOnCenterImage);
}
}

function handleClickOnRightImage(event){
  // increment right image clicks
  console.log('clicked on right image');
}

function handleClickOnCenterImage(event){
  // increment center image clicks
  console.log('clicked on center image');
}

 leftImage.addEventListener('click', handleClickOnLeftImage);

 rightImage.addEventListener('click', handleClickOnRightImage);

 centerImage.addEventListener('click', handleClickOnCenterImage);
 
// new images coming into play//
new imageInfo('bag.jpg', 'starwars bag');
new imageInfo('banana.jpg', 'banana');
new imageInfo('bathroom.jpg', 'bathroom');




