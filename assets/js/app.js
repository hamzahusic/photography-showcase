const menu_btn = document.getElementById("menu-btn")
const mobile_menu = document.getElementsByClassName("mobile-menu-links")[0]

menu_btn.addEventListener("click", ()=>{
   mobile_menu.classList.toggle("active") 
})

const desktop_menu_links = document.querySelectorAll(".nav-links a")
const mobile_menu_links = document.querySelectorAll('.mobile-menu-links a')
const homeLink = document.getElementById("home-link");

const updateActiveLink = (menu_links) => {
   menu_links.forEach(link => {
      link.onclick = () => {
         menu_links.forEach(mlink => mlink.classList.remove('active-link'))
         link.classList.add('active-link')
      }
   })
}

homeLink.onclick = () => {
   desktop_menu_links.forEach(link => link.classList.remove('active-link'))
   mobile_menu_links.forEach(link => link.classList.remove('active-link'))
} 

const checkUserLogin = () => {
   const data = localStorage.getItem('user')
   if(data){
      document.getElementById("welcome_message").innerText = "Welcome back " + data + "!";
      document.getElementById("welcome_message").style.display = 'block';
   }
   else{
      document.getElementById("welcome_message").innerText = "";
      document.getElementById("welcome_message").style.display = 'none';
      window.location.hash = "login"
   }
}

updateActiveLink(desktop_menu_links)
updateActiveLink(mobile_menu_links)