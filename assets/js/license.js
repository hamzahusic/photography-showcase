const toggle_element = document.querySelectorAll(".toggle-element")

toggle_element.forEach((element)=>{
    element.addEventListener("click", () => {
        toggle_content_style = element.querySelector('#toggle-content')
        if (toggle_content_style.style.display === "block"){
            toggle_content_style.style.display = "none"
            element.querySelector("#arrow-icon").style.transform = "rotate(0deg)"
        }
        else{
            toggle_content_style.style.display = "block"
            element.querySelector("#arrow-icon").style.transform = "rotate(180deg)"
        }
    })
})
