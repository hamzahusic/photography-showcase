const login_form = document.getElementById("login_form")
const login_email = document.getElementById("login_email")
const login_password = document.getElementById("login_password")
const login_message = document.getElementById("login_message")
const password_message = document.getElementById("password_message")


//login form
login_form.addEventListener("submit", (e)=>{
    e.preventDefault()

    document.getElementById("validEmail").classList.replace("invalid-feedback","valid-feedback")
    email_values = login_email.value.split("@")
    
    const regex = /[^a-zA-Z0-9\s.]/
    
    if(regex.test(email_values[0]) || regex.test(email_values[1])){
        login_message.innerText = "Email is not allowed to have any special characters!"
        document.getElementById("validEmail").classList.replace("valid-feedback","invalid-feedback")
        return
    }

    if(email_values[1].length < 5 || !email_values[1].includes('.')){
        login_message.innerText = "Email needs to have domain name after @ symbol! (example@domain.com)"
        document.getElementById("validEmail").classList.replace("valid-feedback","invalid-feedback")
        return
    }
    
    email_domain = email_values[1].split('.')
    
    email_domain.forEach((element) => {
        if(element.length<2){
            login_message.innerText = "Each email domain name part has to have length greater than or equal to two! (@domain.co.uk or @domain.com)"
            document.getElementById("validEmail").classList.replace("valid-feedback","invalid-feedback")
            return
        }
        else{
            login_message.innerText = ""
        }
    })

}) 