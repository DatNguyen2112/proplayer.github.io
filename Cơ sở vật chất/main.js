
var NavMobileOpen = document.querySelector(".Nav_icon");
var NavMobileClose = document.querySelector(".Menu_close");
var OverlayMenu = document.querySelector(".Overlay_menu");
var Overlay = document.querySelector(".Overlay");

//Overlay zoom
var Picture1 = document.querySelector(".zoom_1");
var Zoom = document.querySelector(".Zoom");
var OverlayZoom = document.querySelector(".Overlay_zoom");

Picture1.onclick = function() {
    Zoom.style.display = "block"
}

OverlayZoom.onclick = function() {
    Zoom.style.display = "none"
}


NavMobileOpen.onclick = function() {
    OverlayMenu.style.display = "block";
    Overlay.style.display = "block";
}

NavMobileClose.onclick = function() {
    OverlayMenu.style.display = "none";
     Overlay.style.display = "none";
}