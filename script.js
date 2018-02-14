console.log("hi");

function setActive(){
  var path=window.location.pathname;
  console.log("path1: " + path);
  //path = path.replace(/\/$/, "");
  //console.log("path2: " + path);
  //path = decodeURIComponent(path);
  //console.log("path2: " + path)
  
  $("#navMenu a").each(function() {
    console.log("in each");
    var href = $(this).attr('href');
    console.log("href: " + href);
    var substr40 = path.substring(40, path.length);
    console.log('substr40: ' + substr40);
    //Note: The code below should be reorganized... we need to find the bit 
    //from the second dot backwards...
    //Note: this is for Glitch!
    //if (path.substring(1, path.length) === href){
    //Note: this is for localhost! Need to strip off /C:/Users/Edit/Desktop/EBPortfolio/Code/  
    if (path.substring(40, path.length) === href){
      $(this).closest('li').addClass('active');
    }
    else if (path === "/"){
      //	$(this).closest('li').addClass('active');
      console.log("path home");
      $("#home").addClass('active');  
    }  
  });
};  

$(document).ready(function() {
  
  console.log("here");
  
  $("#navMenu").load('nav.html', function(){
    console.log("after load");
    //$(this).addClass("active");
    setActive();
    console.log("added active again");
  });
  /*
  $('ul li a').click(function(){
    
      $('li a').removeClass("active");
     
      $(this).addClass("active");

  });

*/
  
  $("#navMenu").on("click", "li", function(){
      console.log("on click li");
      $('li a').removeClass("active");
      console.log($('li a'));
      console.log($(this));
     $(this).addClass("active"); // Wow! Event propagation rulez!!
    console.log("active is added");
      
  });

});
  
  
    /*
  // Get the container element
var btnContainer = document.getElementById("navMenu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("navLi");

console.log("before for loop");
  console.log("btns: " + btns);
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  console.log("in for loop; i: " + i);
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

*/
/*

$('#navMenu li').click(function(e){
 //e.preventDefault(); //Remove this in your main code
    $('#navMenu li').removeClass("active");
    $(this).addClass("active");
});

});
*/
/*
document.getElementById("navMenu").innerHTML =
 '<ul>'+
  '<li><a href="index.html">Home</a></li>'+
  '<li><a href="codepenprojects.html">CodePen Projects</a></li>'+
 '</ul>';


$(document).ready(function(){
  
  $('ul li a').click(function(){
    
    $('li a').removeClass("active");
     
    $(this).addClass("active");
    
  });
});
*/