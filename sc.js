
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name && email) {
    alert(`📢 Hey ${name}, your info (${email}) is now in the CEO’s vault! 🔐`);
  } else {
    alert("⚠️ Oops! Please fill in both fields.");
  }
});


function addTodo() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");

   
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
      taskSpan.style.textDecoration = checkbox.checked ? "line-through" : "none";
    };

    
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(removeBtn);

    document.getElementById("todoList").appendChild(li);
    input.value = "";
  }
}
