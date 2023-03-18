let main = document.querySelectorAll(".container")[0];
let AddButton = document.querySelectorAll("button")[0];
let Input = document.getElementById("text");
let H4 = document.getElementsByTagName("h4")[0];
let Items = document.getElementById("items");
let Todo = document.querySelectorAll(".Todo-Items")[0];

console.log(AddButton);
console.log(H4);
console.log(Todo);

AddButton.onclick = list;
document.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    list();
  }
  return;
});

function list() {
  if (Input.value.trim() == "") {
    return;
  }
  H4.style.display = "none";
  let Div = document.createElement("div");
  Div.classList.add("createdDiv");
  Items.append(Div);

  const paragraph = document.createElement("p");
  paragraph.id = "todo-text";
  paragraph.innerText = Input.value;
  Div.append(paragraph);

  const innerDiv = document.createElement("div");
  innerDiv.id = "todo-text1";
  Div.append(innerDiv);

  const checkButton = document.createElement("button");
  checkButton.classList.add("material-symbols-outlined");
  checkButton.innerText = "done";
  innerDiv.append(checkButton);
  checkButton.addEventListener("click", clickHandler);
  function clickHandler() {
    paragraph.style.textDecoration = "line-through";
  }

  const editButton = document.createElement("button");
  editButton.id = "Edit";
  editButton.innerText = "EDIT";
  innerDiv.append(editButton);
  editButton.addEventListener("click", editClickHandler);
  function editClickHandler() {
    Input.value = paragraph.innerText;
    paragraph.parentElement.remove();
  }

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("material-symbols-outlined");
  deleteButton.innerText = "close";
  innerDiv.append(deleteButton);
  deleteButton.addEventListener("click", deleteClickHandler);
  function deleteClickHandler() {
    paragraph.parentElement.remove();
  }

  Input.value = "";
}
