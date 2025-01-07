const menu_btn = document.getElementById("menu-btn")
const mobile_menu = document.getElementsByClassName("mobile-menu-links")[0]

menu_btn.addEventListener("click", ()=>{
   mobile_menu.classList.toggle("active") 
})

const desktop_menu_links = document.querySelectorAll(".nav-links a")

desktop_menu_links.forEach(link => {
   link.onclick = () => {
      desktop_menu_links.forEach(mlink => mlink.classList.remove('active-link'))
      link.classList.add('active-link')
   }
})
