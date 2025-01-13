const body = document.body;
const theme_switch_btn = document.querySelectorAll("#theme-switch")
const currentPath = window.location.pathname;

theme_switch_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme')
    
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme')
            document.getElementById('menu-btn').src = `${currentPath.startsWith('/pages') ? '.' : ''}./assets/menu-black.png`
        }
        else{
            body.setAttribute('data-theme','dark');
            document.getElementById('menu-btn').src = `${currentPath.startsWith('/pages') ? '.' : ''}./assets/menu.png`
        } 
        
        localStorage.setItem('theme', currentTheme === "dark" ? "light" : "dark")
    })
})

const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark'){
    body.setAttribute('data-theme','dark')
    document.getElementById('menu-btn').src = `${currentPath.startsWith('/pages') ? '.' : ''}./assets/menu.png`
}
else{
    document.getElementById('menu-btn').src = `${currentPath.startsWith('/pages') ? '.' : ''}./assets/menu-black.png`
}