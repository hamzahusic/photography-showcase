const body = document.body;
const theme_switch_btn = document.querySelectorAll("#theme-switch")


theme_switch_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme')
    
        currentTheme === 'dark' ? body.removeAttribute('data-theme') : body.setAttribute('data-theme','dark');
        localStorage.setItem('theme', currentTheme === "dark" ? "light" : "dark")
    })
})

const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark'){
    body.setAttribute('data-theme','dark')
}