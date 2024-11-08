const drawer_btn_sm = document.getElementById('drawer-btn-sm');
const navbar_drawer_sm = document.getElementById('navbar-drawer-sm');

drawer_btn_sm.addEventListener("click", function() {
    navbar_drawer_sm.classList.toggle("show");
});
