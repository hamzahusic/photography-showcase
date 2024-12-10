const allShowcaseImages = document.querySelectorAll(".img-container");
const interactiveGalery = document.getElementsByClassName("interactive-galery")[0]
const interactiveGaleryDetails = interactiveGalery.children[0];
const closeGallery = document.getElementById("close-gallery")

closeGallery.addEventListener("click",()=>{
    interactiveGalery.style.display = "none"
})

const setGalleryValues = (img,name,profileImage) => {
    interactiveGaleryDetails.children[1].src = img
    interactiveGaleryDetails.children[0].children[0].children[1].textContent = name
    interactiveGaleryDetails.children[0].children[0].children[0].src = profileImage
    interactiveGalery.style.display = "flex"
}


allShowcaseImages.forEach((gallery_element) => {
        
    gallery_element.addEventListener("click", () => {
        let userDetails = gallery_element.getElementsByClassName('profile-info-action')[0].children[0]
        let userName = userDetails.children[1].textContent
        let userProfileImage = userDetails.children[0].src
        const img_url = gallery_element.children[1].src;
        setGalleryValues(img_url,userName,userProfileImage)
    })

})
