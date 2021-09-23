async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    console.log("this should be recording ", comment_text);
    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
        // user_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log(response);
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
