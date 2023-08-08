const postElement = document.getElementById("posts");
const newPostDialog = document.getElementById("prompt");
const readPostDialog = document.getElementById("readPost");
const postContents = document.getElementById("postContents");

const getPosts = async () => {
  const response = await fetch("api/posts");
  return response.json();
};

const getPost = async (id) => {
  const response = await fetch(`api/post/${id}`);
  return response.json();
};

const deletePost = async (id) => {
  const response = await fetch(`api/post/${id}`, {
    method: "DELETE",
  });
  return response.json();
};

const newPost = async (data) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`api/posts`, request);
  return response.json();
};

const renderPosts = async () => {
  const posts = await getPosts();
  postElement.innerHTML = "";

  posts.map((post) => {
    postElement.innerHTML += `
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">${post.title}</h2>
        <p>${post.body.slice(0, 40)}...</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary" onclick="openReadPost(${post.id})">Read Post</button>
        </div>
      </div>
    </div>`;
  });
};

const openReadPost = async (id) => {
  const posts = await getPost(id);

  postContents.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.innerHTML = posts.title;
  const p = document.createElement("p");
  p.innerHTML = posts.body;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "btn btn-primary";
  button.innerHTML = "Delete Post";
  button.onclick = async () => {
    await deletePost(`${posts.id}`);
    await renderPosts();
    await closeReadPost();
  };

  postContents.appendChild(h1);
  postContents.appendChild(p);
  const div = document.createElement("div");
  div.className = "modal-action";
  div.appendChild(button);
  postContents.appendChild(div);

  readPostDialog.show();
};
const closeReadPost = async () => readPostDialog.close();
const openDialog = async () => newPostDialog.show();
const closeDialog = async () => {
  newPostDialog.close();
};
const saveDialog = async () => {
  const title = document.getElementById("title").value;
  const postText = document.getElementById("postText").value;

  await newPost({ title: title, body: postText });
  await renderPosts();

  newPostDialog.close();
};

renderPosts();