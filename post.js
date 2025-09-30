// Get ID from URL
const urlParams = new URLSearchParams(window.location.search);
const postId = parseInt(urlParams.get("id"));

fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const post = posts.find(p => p.id === postId);
    const singlePost = document.getElementById("single-post");

    if (post) {
      singlePost.innerHTML = `
        <article class="post">
          <h2>${post.title}</h2>
          <small>${new Date(post.date).toDateString()}</small>
          <p>${post.content}</p>
          <br>
          <a href="index.html">← Back to Blog</a>
        </article>
      `;
    } else {
      singlePost.innerHTML = "<p>Post not found.</p>";
    }
  })
  .catch(err => console.error("Error loading post:", err));
