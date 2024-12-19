const register_form = document.getElementById("register_form")
const form_name = document.getElementById("fullname")
const name_indicator = document.getElementById("name_indicator")
const register_email = document.getElementById("register_email")
const email_indicator = document.getElementById("email_indicator")
const password = document.getElementById('validPassword')

register_form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const regex = /^[a-zA-Z\s]+$/
    name_indicator.innerText = ""
    document.getElementById("validName").classList.replace("invalid-feedback","valid-feedback")
    
    if(!regex.test(form_name.value)){
        name_indicator.innerText = "Invalid name! (only letters are allowed)"
        document.getElementById("validName").classList.replace("valid-feedback","invalid-feedback")
        return
    }
    
    document.getElementById("validEmail").classList.replace("invalid-feedback","valid-feedback")
    email_indicator.innerText = ""
    
    email_values = register_email.value.split("@")

    if(!hasSpecialCharacters(email_values,email_indicator,"validEmail")){
        return
    }

    if(!hasValidDomain(email_values,email_indicator,"validEmail")){
        return
    }
    
    email_domain = email_values[1].split('.')
    
    if(!hasValidTLD(email_domain,email_indicator,"validEmail")){
        return
    }

    if(password.value.length < 8){
        showNotification("","Password must have at least eight characters!","failed")
        return
    }
    showNotification("Successfully created account!","User doesn't exists","success")
})

function checkPasswordStrength(){
    const hasNumber = /\d/
    const hasSpecialCharacter = /[^a-zA-Z0-9\s]/
    const hasLetter = /[a-zA-Z]/

    const password_indicator = document.getElementById('password_indicator')

    if(!password.value.length){
        password_indicator.innerText = "Please provide a password"
        password_indicator.style.color = "#d9534f"
        return
    }

    if(password.value.length<8 || (hasLetter.test(password.value) && !hasNumber.test(password.value) && !hasSpecialCharacter.test(password.value))){
        password_indicator.innerText = "Weak password"
        password_indicator.style.color = "#f0ad4e"
    }
    else if(hasLetter.test(password.value) && hasNumber.test(password.value) && !hasSpecialCharacter.test(password.value)){
        password_indicator.innerText = "Strong password"
        password_indicator.style.color = "#0275d8"
    }
    else if(hasLetter.test(password.value) && hasNumber.test(password.value) && hasSpecialCharacter.test(password.value)){
        password_indicator.innerText = "Very strong password"
        password_indicator.style.color = "#5cb85c"
    }
}

password.addEventListener("keyup",checkPasswordStrength)
