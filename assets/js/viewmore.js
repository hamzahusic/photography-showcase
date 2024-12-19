const searchParams = new URLSearchParams(window.location.search)
const postId = searchParams.get('id')
const view_more_container = document.querySelector('.view-more-container')

const loadPost = async () => {
    if(postId === null){
        view_more_container.innerHTML = `
            <p id="not_found">Ooops.. Something went wrong (post id missing)</p>
        `
        return
    }

    const request_posts = await fetch('/assets/db/posts.json')
    const post_data = await request_posts.json()
    const post = post_data.filter((post) => post.id == postId)[0]

    if(!post || post.length === 0){
        view_more_container.innerHTML = `
            <p id="not_found">Ooops.. Something went wrong (post doesn't exists)</p>
        `
        return
    }

    view_more_container.innerHTML = `
    <div class="view-more-options">
                <div class="view-more-profile">
                    <img src=".${post.profile_img}" alt="Profile picture" width="50px" height="50px">
                    <div class="view-more-profile-name">
                        <p>${post.first_name} ${post.last_name}</p>
                        <p>Follow</p>
                    </div>
                </div>
                <div class="view-more-buttons">
                    <button>
                        <img src="../assets/bookmark.png" alt="save/collect icon">
                        <p>Collect <span id="bold">${post.collect}</span></p>
                    </button>
                    <button>
                        <img src="../assets/heart.png" alt="like icon">
                        <p>Like <span id="bold">${post.like}</span></p>
                    </button>
                    <button id="free_download">
                        <p>Free Download</p>
                        <img src="../assets/downloads.png" alt="download icon">
                    </button>
                </div>
            </div>
            <img src=".${post.post_img}" alt="view more image">
            `

}
loadPost()