function doSomething() {
  console.log("Hi from doSomething() event handler");
}

const btns = document.getElementsByTagName("button");

for (const btn of btns) {
  btn.addEventListener("click", doSomething);
}

function removeEventListeners() {
  for (const btn of btns) {
    btn.removeEventListener("click", doSomething);
  }
}

// ES6 --> ECMAScript6
// ES6 feature: arrow functions
// (...params) => {}
// param => {} when 1 parameter
// param => <code> when single line of code, which is returned

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      res
        .json()
        .then((body) => {
          console.log(body);
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}
