const addPost = document.querySelector('.addPost')
const modalPost = document.querySelector('.modalPost')

addPost.onclick = () => {
    
    modalPost.style.display = 'block'; 
}

const closeButton = document.querySelector('.closeButton')

closeButton.onclick = () => {
    modalPost.style.display = 'none'; 
}
