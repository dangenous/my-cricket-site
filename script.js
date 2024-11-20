// Mock database (in-memory storage for now)
let posts = [];

// Function to submit a new post
function submitPost() {
    const postContent = document.getElementById('post-content').value;

    if (postContent.trim() !== "") {
        const newPost = {
            id: posts.length + 1,
            content: postContent,
            date: new Date().toLocaleString()
        };

        posts.push(newPost);
        displayPosts();
        document.getElementById('post-content').value = "";  // Clear the textarea
    }
}

// Function to display posts
function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = "";  // Clear current posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <p class="content">${post.content}</p>
            <small>Posted on: ${post.date}</small>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Initial display
displayPosts();
