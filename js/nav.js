function toggleMenu() {
  var menu = document.querySelector(".navBar");
  var menuS = document.querySelector(".menuS");
  const chev = document.getElementById('chev');
  var menuItems = document.getElementById("menu-items");
  var menuLabel = document.querySelector(".menu-label");
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex"; 
    chev.src = "./images/Vector 4.svg";
  } else {
    menuItems.style.display = "none";
    chev.src = "./images/Vector 3.svg";

  }
}
