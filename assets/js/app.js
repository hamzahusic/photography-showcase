const menu_btn = document.getElementById("menu-btn")
const mobile_menu = document.getElementsByClassName("mobile-menu-links")[0]

menu_btn.addEventListener("click", ()=>{
   mobile_menu.classList.toggle("active") 
})
