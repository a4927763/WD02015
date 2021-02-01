

//rwd topnav
function myFunction() {
    var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
     x.className += " responsive";
    } else {
     x.className = "topnav";
    }
}
var modal = document.getElementById('register');
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
}
}



