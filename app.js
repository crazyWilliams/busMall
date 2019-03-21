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

//==============================================================//
//   
// global variables 

//==============================================================//


// counter for num of clicks
var likeCounter = 0;
var allImages = [];
var allImagesOnPage = [];
var currentImage;
var totalClicks = 0;

var leftImage = document.getElementById("leftImagePosition");
 var rightImage = document.getElementById("rightImagePosition");
 var centerImage = document.getElementById('centerImagePosition');
 var productList = document.getElementById('allImages');
//  var allImages = document.getElementById('allImages');
//  allImagesOnPage.push(leftImage);
//  allImagesOnPage.push(rightImage);
//  allImagesOnPage.push(centerImage);

//==========================================================//
//   Constructor
// =========================================================//

var imageInfo = function(name, filePath, description){
  this.name = name;
  this.filePath = filePath;
  this.appeared = 0;
  this.clickCount = 0;
allImages.push(this);

};
//==============================================================//
//   Add clicks to page
//==============================================================//

function pickThreeImagesAndIncrementAppeared(){
  var leftImageIndex = Math.floor(Math.random() * allImages.length);
  var centerImageIndex = Math.floor(Math.random() * allImages.length);
  var rightImageIndex = Math.floor(Math.random() * allImages.length);

  allImages[leftImageIndex].appeared++;
  allImages[centerImageIndex].appeared++;
  allImages[rightImageIndex].appeared++;

leftImage.src = allImages[leftImageIndex].filePath;
rightImage.src = allImages[rightImageIndex].filePath;
centerImage.src = allImages[centerImageIndex].filePath;
}



// Helpers and Handlers
function handleClickOnImage (clickEvent){
  if(event.target.tagName !== 'IMG'){
    console.log('click on an image');
    return;
  }

  totalClicks++;
  //figure out which image was clicked
  // This broke if i didnt click on an image
  // Do this for all images

  for( var i = 0; i < allImages.length; i++){
    if(event.target.src.includes(allImages[i].filePath)){
      console.log(`${allImages[i].name} was picked`);
      allImages[i].clickCount++;
    }
  }
  pickThreeImagesAndIncrementAppeared();
  // check if i have clicked 5 times, then put the chart on
  if(totalClicks > 25){
    buildMyChart();
  }

}

// Chartjs
function buildMyChart(){

  var ctx = document.getElementById('myChart').getContext('2d');

  var labels = [];
  var data = [];
  for(var i = 0; i < allImages.length; i++){
    labels.push(allImages[i].name);
    data.push(Math.floor(100 *allImages[i].clickCount / allImages[i].appeared));
  }


  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}






//Instantiating the page

new imageInfo('bag' , 'images/bag.jpg', 'starwars bag');
new imageInfo('banana' , 'images/banana.jpg', 'banana');
new imageInfo('bathroom' , 'images/bathroom.jpg', 'bathroom');
new imageInfo('boots', 'images/boots.jpg', 'Boots');
new imageInfo('breakfast', 'images/breakfast.jpg', 'Breakfast maker');
new imageInfo('bubblegum', 'images/bubblegum.jpg', 'Meatball bubblegum');
new imageInfo('chair', 'images/chair.jpg', 'Chair');
new imageInfo('cthulhu', 'images/cthulhu.jpg', 'thulhu');
new imageInfo('dog-duck', 'images/dog-duck.jpg', 'Dog Duck');
new imageInfo('dragon', 'images/dragon.jpg', 'Dragon');
new imageInfo('pen', 'images/pen.jpg', 'Pen');
new imageInfo('pet-sweep', 'images/pet-sweep.jpg', 'pet-sweep');
new imageInfo('scissors', 'images/scissors.jpg', 'scissors');
new imageInfo('shark', 'images/shark.jpg', 'shark');
new imageInfo('sweep', 'images/sweep.png', 'sweep');
new imageInfo('tauntaun', 'images/tauntaun.jpg', 'tauntaun');
new imageInfo('unicorn', 'images/unicorn.jpg', 'unicorn');
new imageInfo('usb', 'images/usb.gif', 'usb');
new imageInfo('water-can', 'images/water-can.jpg', 'water-can');
new imageInfo('wine-glass', 'images/wine-glass.jpg', 'wine-glass');


productList.addEventListener('click', handleClickOnImage);

pickThreeImagesAndIncrementAppeared();



//==============================================================//

//==============================================================//











//==============================================================//
//       vvvvvvvvvvvvvvvvv
//==============================================================//
 
 
// function handleClickOnLeftImage(){
//   //adding clicks
  
//   likeCounter++;
//   var rightImageIndex = Math.floor(Math.random() * allImages.length);
//   var leftImageIndex = Math.floor(Math.random() * allImages.length);
//   var centerImageIndex = Math.floor(Math.random() * allImages.length);
  
// leftImage.src = allImages[leftImageIndex].filePath;
// rightImage.src = allImages[rightImageIndex].filePath;
// centerImage.src = allImages[centerImageIndex].filePath;


//   // stop after 25 clicks//
//   if(likeCounter > 24){
//     leftImage.removeEventListener('click', handleClickOnLeftImage);
//     rightImage.removeEventListener('click', handleClickOnRightImage);
//     centerImage.removeEventListener('click', handleClickOnCenterImage);
    

//   }

// }

// function handleClickOnRightImage(){
  
//   likeCounter++;
//   var rightImageIndex = Math.floor(Math.random() * allImages.length);
//   var leftImageIndex = Math.floor(Math.random() * allImages.length);
//   var centerImageIndex = Math.floor(Math.random() * allImages.length);

//   leftImage.src = allImages[leftImageIndex].filePath;
// rightImage.src = allImages[rightImageIndex].filePath;
// centerImage.src = allImages[centerImageIndex].filePath;
// if(likeCounter > 10){
//   leftImage.removeEventListener('click', handleClickOnLeftImage);
//   rightImage.removeEventListener('click', handleClickOnRightImage);
//   centerImage.removeEventListener('click', handleClickOnCenterImage);
  
//   console.log('clicked 25 times');
// }

// }

// function handleClickOnCenterImage(){
  
//   likeCounter++;
//   var rightImageIndex = Math.floor(Math.random() * allImages.length);
//   var leftImageIndex = Math.floor(Math.random() * allImages.length);
//   var centerImageIndex = Math.floor(Math.random() * allImages.length);

// leftImage.src = allImages[leftImageIndex].filePath;
// rightImage.src = allImages[rightImageIndex].filePath;
// centerImage.src = allImages[centerImageIndex].filePath;
// if(likeCounter > 10){
  
//   leftImage.removeEventListener('click', handleClickOnLeftImage);
//   rightImage.removeEventListener('click', handleClickOnRightImage);
//   centerImage.removeEventListener('click', handleClickOnCenterImage);
  
//   console.log('clicked 25 times');
// }
// }


//==============================================================//
//         ^^^^^^^^^^
//==============================================================//
 // new images coming into play//
// new imageInfo('bag' , 'images/bag.jpg', 'starwars bag');
// new imageInfo('banana' , 'images/banana.jpg', 'banana');
// new imageInfo('bathroom' , 'images/bathroom.jpg', 'bathroom');
// new imageInfo('boots', 'images/boots.jpg', 'Boots');
// new imageInfo('breakfast', 'images/breakfast.jpg', 'Breakfast maker');
// new imageInfo('bubblegum', 'images/bubblegum.jpg', 'Meatball bubblegum');
// new imageInfo('chair', 'images/chair.jpg', 'Chair');
// new imageInfo('cthulhu', 'images/cthulhu.jpg', 'thulhu');
// new imageInfo('dog-duck', 'images/dog-duck.jpg', 'Dog Duck');
// new imageInfo('dragon', 'images/dragon.jpg', 'Dragon');
// new imageInfo('pen', 'images/pen.jpg', 'Pen');
// new imageInfo('pet-sweep', 'images/pet-sweep.jpg', 'pet-sweep');
// new imageInfo('scissors', 'images/scissors.jpg', 'scissors');
// new imageInfo('shark', 'images/shark.jpg', 'shark');
// new imageInfo('sweep', 'images/sweep.png', 'sweep');
// new imageInfo('tauntaun', 'images/tauntaun.jpg', 'tauntaun');
// new imageInfo('unicorn', 'images/unicorn.jpg', 'unicorn');
// new imageInfo('usb', 'images/usb.gif', 'usb');
// new imageInfo('water-can', 'images/water-can.jpg', 'water-can');
// new imageInfo('wine-glass', 'images/wine-glass.jpg', 'wine-glass');

//==============making it clickable======================//

// leftImage.addEventListener('click', handleClickOnLeftImage);

// rightImage.addEventListener('click', handleClickOnRightImage);

// centerImage.addEventListener('click', handleClickOnCenterImage);
