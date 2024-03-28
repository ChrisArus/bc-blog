// Logic for handling form submission and validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blog-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleFormSubmit();
    });
});

function handleFormSubmit() {
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please complete all fields in the form.');
    } else {
        const blogPost = {
            author: username,
            title: title,
            content: content
        };

        const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        window.location.href = 'blog.html'; // Redirect to the posts page
    }
}

