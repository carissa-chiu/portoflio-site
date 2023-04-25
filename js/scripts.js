console.log("Hi there, welcome to my portfolio site! Feel free to poke around and checkout my work.");

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') 
       {x.className += ' responsive';}
       else {x.className = 'navtoggle';}
}