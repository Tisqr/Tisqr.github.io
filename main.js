var navbar = document.getElementById('top_nav');
navbar.innerHTML = `
<a href="./index.html" class="active">Home</a>
<a href="./projects.html">Projects</a>
<a href="./about.html">About</a>
<a href="javascript:void(0);" class="icon" onclick="hamburger_dropdown()">
<img src="./assests/hamburger.svg" alt="hamburger" width="32" height="32">
</a>
`
/* Toggle between adding and removing the "responsive" class to top_nav when the user clicks on the icon */
function hamburger_dropdown() {
  var x = document.getElementById("top_nav");
  if (x.className === "top_nav") {
    x.className += " responsive";
  } else {
    x.className = "top_nav";
  }
}
