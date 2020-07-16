let menu = document.getElementById('menu_bar');
document.getElementById('icon_menu').addEventListener('mouseover', function(){over_show_menu()});
document.getElementById('icon_menu').addEventListener('mouseout', function(){out_show_menu()});
menu.addEventListener('mouseover', function(){over_show_menu()});
menu.addEventListener('mouseout', function(){out_show_menu()});
function show_menu(x){
    menu.classList.toggle('max_menu_show');};
function over_show_menu(){
    menu.style.transform = 'translateY(0%)';};
function out_show_menu(){
    menu.style.transform = 'translateY(-100%)';};
