const removePost = (post) => {
    document.getElementsByClassName("gallery")[0].removeChild(post)
}

const loadEditPost = (first_name,last_name,image) => {
    document.getElementById("first_name").value = first_name
    document.getElementById("last_name").value = last_name
    document.getElementById('post-preview').src = image
}

const saveEditPost = (e,post) => {
    e.preventDefault()

    const first_name = document.getElementById('first_name').value
    const last_name = document.getElementById('last_name').value

    post.querySelector('#author').textContent = `${first_name} ${last_name}`
}