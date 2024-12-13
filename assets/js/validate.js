function hasSpecialCharacters(email_values,message,indicator_name){
    const regex = /[^a-zA-Z0-9\s.]/

    if(regex.test(email_values[0]) || regex.test(email_values[1])){
        message.innerText = "Email is not allowed to have any special characters!"
        document.getElementById(indicator_name).classList.replace("valid-feedback","invalid-feedback")
        return false
    }
    return true
}

function hasValidDomain(email_values,message,indicator_name){
    if(email_values[1].length < 5 || !email_values[1].includes('.')){
        message.innerText = "Email needs to have TLDs after domain name! (example@domain.com)"
        document.getElementById(indicator_name).classList.replace("valid-feedback","invalid-feedback")
        return false
    }
    return true
}

function hasValidTLD(email_domain,message,indicator_name){
    isValid = true
    email_domain.forEach((element) => {
        if(element.length<2){
            message.innerText = "Each email domain name part has to have length greater than or equal to two! (@domain.co.uk or @domain.com)"
            document.getElementById(indicator_name).classList.replace("valid-feedback","invalid-feedback")
            isValid = false
            return
        }
    })
    
    return isValid
}