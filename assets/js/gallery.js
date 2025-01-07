const initializeGalleryEvents = () => {
    const allShowcaseImages = document.querySelectorAll(".img-container");
    const interactiveGallery = document.querySelectorAll(".interactive-galery")
    const closeGallery = document.querySelectorAll("#close-gallery")
    const editPostModal = document.querySelectorAll(".edit-post")

    closeGallery.forEach((close) => {
        close.addEventListener("click",() => {
            interactiveGallery.forEach(gallery => gallery.style.display = "none")
        })
    })
    
    const setGalleryValues = (img,name,profileImage,post_id,post) => {
        document.querySelectorAll("#interactive_author_image").forEach(author_image => author_image.src = img)
        document.querySelectorAll("#interactive_author_name").forEach(author_name => author_name.textContent = name)
        document.querySelectorAll("#profile-img").forEach(profile_img => profile_img.src = profileImage)
        
        //document.getElementById('view_more').setAttribute('href',`/pages/viewmore.html?id=${post_id}`)

        try {
            document.querySelectorAll('#remove').forEach(removeBtn => {
                removeBtn.onclick = () => {
                    removePost(post)
                    closeGallery.forEach(close => close.click())
                    showNotification("Successfully removed post!","","success")
                }
            }) 
        } catch (error) {
            showNotification("","Error while trying to remove post!","failed")
        }
        
        try {
            document.querySelectorAll('.edit-post-details').forEach( editBtn => {
                editBtn.onsubmit = (e) => {
                    saveEditPost(e,post)
                    editPostModal.forEach(editPost => editPost.style.display = "none")
                    showNotification("Successfully updated post!","","success")
                }
            })
        } catch (error) {
            showNotification("","Error while trying to update post!","failed")
        }
        
        document.querySelectorAll("#edit-post-close").forEach(editCloseBtn => {
            editCloseBtn.onclick = () => {
                editPostModal.forEach(editPost => editPost.style.display = "none")
            }
        })
        
        try {
            document.querySelectorAll('#edit').forEach(editBtn => {
                editBtn.onclick = () => {
                    closeGallery.forEach(close => close.click())
                    loadEditPost(name.split(" ")[0],name.split(" ")[1],img)
                    editPostModal.forEach(editPost => editPost.style.display = "flex")
                }
            })
        } catch (error) {
            showNotification("","Error while trying to load data for edit!","failed")
        }

        interactiveGallery.forEach(gallery => gallery.style.display = "flex")
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
