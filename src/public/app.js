const button = document.querySelectorAll(".input");

button?.forEach((e) => {
  e.addEventListener("click", function deleteBtn(e) {
    fetch(`http://localhost:9000/delete/${e.target.dataset.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          window.location.href = "/users";
        }
      });
  });
});
