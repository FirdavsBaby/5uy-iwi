let parent = document.querySelector(".container")

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
        parent.innerHTML += comments(
          data[i].name,
          data[i].email,
          data[i].id,
          data[i].postId,
          data[i].body
        );
    }
  });

function comments(name, email, id, postId, body) {
    return ` <div class="comment">
            <h2 class="name">Name: ${name}</h2>
            <p class="id">ID: ${id}  <span class="post-id">PostID:${postId} </span> </p>
            <h3 class="email">Email: ${email}</h3>
            <h4 class="body">Body: ${body}</h4>
        </div>`;
}