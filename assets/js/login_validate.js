const login_form = document.getElementById("login_form")
const login_email = document.getElementById("login_email")
const login_message = document.getElementById("login_message")


login_form.addEventListener("submit", (e)=>{
    e.preventDefault()

    document.getElementById("validEmail").classList.replace("invalid-feedback","valid-feedback")
    email_values = login_email.value.split("@")
    login_message.innerText = ""
    
    if(!hasSpecialCharacters(email_values,login_message,"validEmail")){
        return
    }

    if(!hasValidDomain(email_values,login_message,"validEmail")){
        return
    }
    
    email_domain = email_values[1].split('.')
    
    if(!hasValidTLD(email_domain,login_message,"validEmail")){
        return
    }
   
    login_form.submit()
}) 