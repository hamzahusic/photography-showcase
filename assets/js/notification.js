const showNotification = (s_message,f_message,state) => {
    console.log("Notification")
    const notification = document.createElement('div')
    notification.classList.add("notification")

    if(state == "success"){
        notification.innerHTML = `
        <p id="s_notification">${s_message}</p>
        `
    }
    else{
        notification.innerHTML = `
        <p id="f_notification">${f_message}</p>
        `
    }

    document.body.appendChild(notification)

    setTimeout(() => {
        document.body.removeChild(notification)
    },3000)
}