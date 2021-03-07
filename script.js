const promise = fetch('https://jsonplaceholder.typicode.com/posts');
const postsContainer = document.querySelector('.posts-container');

// promise.then(function(response) {
//   return response.json();
// }).then(function(arr) {
//   console.log(arr);
// });

promise.then(response => response.json())
.then((arr) => {
  displayPosts(arr, postsContainer);
});

function displayPosts(arr, container) {
  console.log(container);

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const div = document.createElement('div');
    div.innerHTML = `
      <h3 class="post__title">${item.title}</h3>
      <p class="post__bofy">${item.body}</p>
    `;
    container.append(div);
  }
}