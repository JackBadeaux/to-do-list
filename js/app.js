document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("taskForm");
  const input = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = input.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      const span = document.createElement("span");
      span.textContent = taskText;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove");

      checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
      });

      removeBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
      taskList.appendChild(li);

      input.value = "";
    }
  });
});
