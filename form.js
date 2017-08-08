function(){
    //Function called when clicking on a question icon.
    //Scrolls to the section you clicked.
}

function(){
    //Function checking if you scrolled to another question
    // If that is the case it changes the active quesion icon
}

function(){
    // Checking the form and adds the error class if not.

    // Loop through:
    // Check one form input
    // If not correct -> add error class
    // If correct -> submit
}

function(){
    // Checks one form input
}

var last_known_scroll_position = 0;
var ticking = false;
var low_pos = 0.0;
var high_pos = 0.1;

function doSomething(scroll_pos) {
  // do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});
