const initializeGalleryEvents = () => {
    const allShowcaseImages = document.querySelectorAll(".img-container");
    const interactiveGallery = document.getElementsByClassName("interactive-galery")[0]
    const interactiveGalleryDetails = interactiveGallery.children[0];
    const closeGallery = document.getElementById("close-gallery")
    const editPostModal = document.querySelector(".edit-post")

    closeGallery.addEventListener("click",()=>{
        interactiveGallery.style.display = "none"
    })
    
    const setGalleryValues = (img,name,profileImage,post_id,post) => {
        interactiveGalleryDetails.children[1].src = img
        interactiveGalleryDetails.children[0].children[0].children[1].textContent = name
        interactiveGalleryDetails.children[0].children[0].children[0].src = profileImage
        
        document.getElementById('view_more').setAttribute('href',`/pages/viewmore.html?id=${post_id}`)
        document.getElementById('remove').onclick = () => {
            removePost(post) 
            closeGallery.click()
            showNotification("Successfully removed post!","","success")
        }
        
        document.querySelector('.edit-post-details').onsubmit = (e) => {
            saveEditPost(e,post)
            editPostModal.style.display = "none"
            showNotification("Successfully updated post!","","success")
        }
        
        document.querySelector("#edit-post-close").onclick = () => {
            editPostModal.style.display = "none"
        }

        document.getElementById('edit').onclick = () => {
            closeGallery.click()
            loadEditPost(name.split(" ")[0],name.split(" ")[1],img)
            editPostModal.style.display = "flex"
        }
        interactiveGallery.style.display = "flex"
    }
    
    
    allShowcaseImages.forEach((gallery_element) => {
            
        gallery_element.addEventListener("click", () => {
            let userDetails = gallery_element.getElementsByClassName('profile-info-action')[0].children[0]
            let userName = userDetails.children[1].textContent
            let userProfileImage = userDetails.children[0].src
            const img_url = gallery_element.children[1].src;
            const post_id = gallery_element.getAttribute('data-id')
            setGalleryValues(img_url,userName,userProfileImage,post_id,gallery_element)
        })
    
    })

}
