'use strict';


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




//==============================================================//
// Handlers
//==============================================================//

function handleClickOnImage (clickEvent){
  if(event.target.tagName !== 'IMG'){
    console.log('click on an image');
    return;
  }

  totalClicks++;
  
  for( var i = 0; i < allImages.length; i++){
    if(event.target.src.includes(allImages[i].filePath)){
      console.log(`${allImages[i].name} was picked`);
      allImages[i].clickCount++;
    }
  }
  pickThreeImagesAndIncrementAppeared();
  if(totalClicks > 25){
   buildMyChart();
   removeImage();
   
   var stringifyallImages = JSON.stringify(totalClicks);
   localStorage.setItem('imageInfo', stringifyallImages);
  }
}
//=================================================================//

// remove pictures after voting //


function removeImage(){
  var img_element = document.getElementById('allImages');
  img_element.remove(img_element.selectedIndex);
}

//=================================================================//
// Chartjs
//=================================================================//
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
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
          'black',
        ],
        borderColor: [
          
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



