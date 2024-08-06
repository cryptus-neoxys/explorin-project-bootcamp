// function doSomething() {
//   console.log("Hi from doSomething() event handler");
// }

// const btns = document.getElementsByTagName("button");

// for (const btn of btns) {
//   btn.addEventListener("click", doSomething);
// }

// function removeEventListeners() {
//   for (const btn of btns) {
//     btn.removeEventListener("click", doSomething);
//   }
// }

// ES6 --> ECMAScript6
// ES6 feature: arrow functions
// (...params) => {}
// param => {} when 1 parameter
// param => <code> when single line of code, which is returned

const postContainer = document.getElementById("post-container");

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      res
        .json()
        .then((posts) => {
          console.log(posts);
          posts.forEach((post) => {
            // const postDiv = document.createElement("div");
            // const postTitle = document.createElement("h3");
            // postTitle.innerText = post.title;
            // const postBody = document.createElement("p");
            // postBody.innerText = post.body;
            // postDiv.appendChild(postTitle);
            // postDiv.appendChild(postBody);
            // postContainer.appendChild(postDiv);
            postContainer.innerHTML += `
            <div>
              <h3>${post.title}</h3>
              <p>${post.body}</p>
            </div>
            `;
          });
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}
