const form = document.querySelector("form");
const input = document.querySelector("[name=Todo]");
const todoList = document.querySelector("#todoList");
const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
function addTodo(todoText) {
  todoData.push(todoText);
  const li = document.createElement("li");
  li.innerText = todoText;
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoData));
}
const todoData = [];
existingTodos.forEach((todo) => {
  addTodo(todo);
});
form.onsubmit = (event) => {
  event.preventDefault();
  addTodo(input.value);
  input.value = "";
};
