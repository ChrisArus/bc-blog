// Logic for rendering blog posts on the blog page
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
});

function renderBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blog-posts');

    blogPostsContainer.innerHTML = '';

    if (blogPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p>No blog posts found.</p>';
    } else {
        blogPosts.forEach(function(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            const authorElement = document.createElement('p');
            authorElement.textContent = 'By: ' + post.author;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);
            postElement.appendChild(authorElement);

            blogPostsContainer.appendChild(postElement);
        });
    }
}
