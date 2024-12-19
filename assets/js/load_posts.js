const gallery = document.getElementsByClassName("gallery")[0]

const loadPosts = async () => {
    const request = await fetch('/assets/db/posts.json')
    const data = await request.json()
    const isNotHomePage = window.location.pathname.startsWith("/pages")

    data.forEach(post => {
        
        let img_container = document.createElement('div')
        img_container.classList.add("img-container")
        img_container.setAttribute("data-id",post.id)

        img_container.innerHTML = `
            <div class="img-overlay">
                <div class="action-icons">
                    <img src="${isNotHomePage ? "." : ""}./assets/bookmark.png" alt="save icon">
                    <img src="${isNotHomePage ? "." : ""}./assets/heart.png" alt="like icon">
                </div>
                <div class="profile-info-action">
                    <div>
                        <img src="${isNotHomePage ? "." : ""}${post.profile_img}" id="profile-img" alt="profile picture">
                        <p>${post.first_name} ${post.last_name}</p>
                    </div>
                    <button>
                        <img src="${isNotHomePage ? "." : ""}./assets/downloads.png" alt="download icon" width="20">
                           Download 
                        </button>
                    </div>
            </div>
            <img src="${isNotHomePage ? "." : ""}${post.post_img}" alt="Image by creators">
        `
        gallery.appendChild(img_container)
    });
    initializeGalleryEvents()
}
loadPosts()