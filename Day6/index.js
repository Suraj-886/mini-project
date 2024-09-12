let selectRow = null;

function showAlert(msg, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 1000);
}

// delete
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Student Data delete successfully", "danger");
  }
  // console.log(target);
  // console.log(e);
});

// Edit
document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selectRow = target.parentElement.parentElement;
    document.querySelector("#Name").value = selectRow.children[0].textContent;
    document.querySelector("#Email").value = selectRow.children[1].textContent;
    document.querySelector("#Profession").value =
      selectRow.children[2].textContent;

    showAlert("save Data", "warning");
  }
  // console.log(target);
  // console.log(e);
});

// fields clear
function clearData() {
  document.querySelector("#Name").value = "";
  document.querySelector("#Email").value = "";
  document.querySelector("#Profession").value = "";
}

// Add
document.querySelector("#student-form").addEventListener("submit", (event) => {
  console.log(event.preventDefault);
  const name = document.querySelector("#Name").value;
  const email = document.querySelector("#Email").value;
  const prof = document.querySelector("#Profession").value;

  if (name == " " || email == "" || prof == "") {
    showAlert("please fill in all fields", "danger");
  } else {
    if (selectRow == null) {
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${prof}</td>
      <td>
      <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      </td>`;

      list.appendChild(row);
      selectRow = null;
      showAlert("student added", "success");
    } else {
      selectRow.children[0].textContent = name;
      selectRow.children[1].textContent = email;
      selectRow.children[2].textContent = prof;
      selectRow = null;
      showAlert("studnet infr Edit", "info");
    }
    clearData();
  }
});
