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
var allImagesOnPage = [];
var currentImage;

var leftImage = document.getElementById("leftImagePosition");
 var rightImage = document.getElementById('rightImagePosition');
 var centerImage = document.getElementById('centerImagePosition');
 var productList = document.getElementById('imagesList');
 allImagesOnPage.push(leftImage);
 allImagesOnPage.push(rightImage);
 allImagesOnPage.push(centerImage);

//==========================================================//
//   Constructor
// =========================================================//

var imageInfo = function(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  // this.timesShown = 0;
  // this.timesClicked = 0;
  // this.description = description;
allImages.push(this);
};


//==============================================================//
//   Add list to page
//==============================================================//

function renderList (){
  for (var m in allImages){
    var imagesList = document.createElement('imagesList');
    imagesList.textContent = allImages[m].timesClicked + ' votes for ' + allImages[m].description;
    productList.appendChild(imagesList);
  }
};
//==============================================================//
//   Initialize the Page ( DOM's putting work on html)
//==============================================================//
 
function handleClickOnLeftImage(){
  //adding clicks
  
  likeCounter++;
  var rightImageIndex = Math.floor(Math.random() * allImages.length);
  var leftImageIndex = Math.floor(Math.random() * allImages.length);
  var centerImageIndex = Math.floor(Math.random() * allImages.length);
  //==============================================================
// var imgIndex = Math.floor(Math.random() * allImages.length);
// imageInfo[i] = allImages[imgIndex];
// allImages[i].src = imageInfo.filePath;
// allImages[i].name = currentImage
//=================================================================

leftImage.src = allImages[leftImageIndex].filePath;
rightImage.src = allImages[rightImageIndex].filePath;
centerImage.src = allImages[centerImageIndex].filePath;
// rightImage.src = imageInfo.filePath;

  // stop after 25 clicks//
  if(likeCounter > 10){
    leftImage.removeEventListener('click', handleClickOnLeftImage);
    rightImage.removeEventListener('click', handleClickOnRightImage);
    centerImage.removeEventListener('click', handleClickOnCenterImage);
    

  }

}


// need to finish right click than copy n paste n do center n left//
function handleClickOnRightImage(event){
  // increment right image clicks
  console.log('clicked on right image');
}

function handleClickOnCenterImage(event){
  // increment center image clicks
  console.log('clicked on center image');
}

// put them on a page//


 
// new images coming into play//
new imageInfo('bag' , 'images/bag.jpg', 'starwars bag');
new imageInfo('banana' , 'images/banana.jpg', 'banana');
new imageInfo('bathroom' , 'images/bathroom.jpg', 'bathroom');
new imageInfo('boots', 'images/boots.jpg', 'Boots');
new imageInfo('breakfast', 'images/breakfast.jpg', 'Breakfast maker');
new imageInfo('bubblegum', 'images/bubblegum.jpg', 'Meatball bubblegum');



 
//==============making it clickable======================//

leftImage.addEventListener('click', handleClickOnLeftImage);

rightImage.addEventListener('click', handleClickOnRightImage);

centerImage.addEventListener('click', handleClickOnCenterImage);
