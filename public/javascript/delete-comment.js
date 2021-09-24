async function deleteComment(event) {
  event.preventDefault();
  console.log("delete has been called");
  const id = event.target.id;

  const response = await fetch(`/api/comment/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    console.log("response ok");
    location.reload();
  } else {
    alert(response.statusText);
  }
}

if (document.querySelector(".delete-comment-button")) {
  document
    .querySelector(".delete-comment-button")
    .addEventListener("click", deleteComment);
}
