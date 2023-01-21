let parent = document.querySelector(".container");
let btn = document.querySelector(".comp");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      parent.innerHTML += todo(data[i].id, data[i].title, data[i].userId);
    }
    // /////////////////////
    btn.addEventListener("click", () => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].completed !== false) {
          parent.innerHTML = todo(data[i].id, data[i].title, data[i].userId);
          console.log(data[i]);
        }
      }
    });
  });

function todo(id, title, userId) {
  return ` <div class="todo" data-id="${userId}">
            <h2 class="title"><span class="id">${id}</span>) ${title}</h2>
        </div>`;
}
