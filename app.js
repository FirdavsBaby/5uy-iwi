
let parent = document.querySelector(".container")

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        parent.innerHTML += users(
          data[i].name,
          data[i].username,
          data[i].email,
          data[i].id,
          data[i].phone,
          data[i].website,
          data[i].company,
          data[i].address
        );
    }
  });
function users(name, username, email, id, phone, website, company, address) {
    return `<div class="user">
        <h3 class="username"><span class="id">${id}</span>) ${username}</h3>
        <h4 class="name">${name}</h4>
        <h5 class="data">
          <span class="phone">${phone}</span
          ><span class="email">${email}</span>
        </h5>
        <a href="${website}" class="website"> WEB SITE : ${website}</a>
        <p class="address">City : ${address.city}</p>
        <p class="company">Company:  ${company.name}</p>
      </div>`;
}
