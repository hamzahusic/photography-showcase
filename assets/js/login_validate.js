const login_form = document.getElementById("login_form")
const login_email = document.getElementById("login_email")
const login_message = document.getElementById("login_message")


const checkUserExits = async (email,password) => {
    const usersRequest = await fetch('/assets/db/users.json')
    const userData = await usersRequest.json()
    let isUser = "failed"
    userData.forEach((user) => {
        if(user.email == email && user.password == password){
            isUser = "success"
            return
        }
    })
    showNotification("Successfully logged in!","Error with creating account",isUser)
}

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
    const user_password = document.getElementById("login_password")
    checkUserExits(login_email.value,user_password.value)
}) 