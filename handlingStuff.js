/* Adding some JS to toggle 
   between on/off of responsive navBar
*/

function responsiveFunc() {
    
    var x = document.getElementById("myNavBar");
    if (x.className === "navBar") {
      x.className += "responsive";
    } else {
      x.className = "navBar";
    }
  }