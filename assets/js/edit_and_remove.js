const removePost = (post) => {
    document.querySelectorAll(".gallery").forEach(element => element?.removeChild(post))
}

const loadEditPost = (first_name,last_name,image) => {
    document.querySelectorAll("#first_name").forEach(fname => fname.value = first_name)
    document.querySelectorAll("#last_name").forEach(lname => lname.value = last_name)
    document.querySelectorAll('#post-preview').forEach(preview => preview.src = image)
}

const saveEditPost = (e,post) => {
    e.preventDefault()

    const first_name = document.getElementById('first_name').value
    const last_name = document.getElementById('last_name').value

    post.querySelector('#author').textContent = `${first_name} ${last_name}`
}