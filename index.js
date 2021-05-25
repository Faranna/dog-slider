var next = document.getElementById("next");
var previous = document.getElementById("previous");
// var image = document.getElementById("image");

var arr = ["images/1.jpg", "images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg"];

var i=0;
next.addEventListener('click', function(){
    i++;
    if (i > arr.length -1) {
        i = 0;
    }
    document.getElementById("image").src = arr[i];
})

previous.addEventListener('click', function(){
    i--;
    if ( i < 0) {
        i = arr.length -1 ;
    }
    document.getElementById("image").src = arr[i];
})

