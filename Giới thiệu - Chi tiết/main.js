
var NavMobileOpen = document.querySelector(".Nav_icon");
var NavMobileClose = document.querySelector(".Menu_close");
var OverlayMenu = document.querySelector(".Overlay_menu");
var Overlay = document.querySelector(".Overlay");

NavMobileOpen.onclick = function() {
    OverlayMenu.style.display = "block";
    Overlay.style.display = "block";
}

NavMobileClose.onclick = function() {
    OverlayMenu.style.display = "none";
     Overlay.style.display = "none";
}