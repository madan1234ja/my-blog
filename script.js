// Load posts list
fetch("posts.json")
  .then(res => res.json())
  .then(posts => {
    const blogContainer = document.getElementById("blog-container");

    posts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("post");

      postDiv.innerHTML = `
        <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
        <small>${new Date(post.date).toDateString()}</small>
        <p>${post.content.substring(0, 100)}...</p>
        <a href="post.html?id=${post.id}" class="read-more">Read More</a>
      `;

      blogContainer.appendChild(postDiv);
    });
  })
  .catch(err => console.error("Error loading posts:", err));
