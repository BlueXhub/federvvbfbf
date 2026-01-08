// Select elements
const addBtn = document.getElementById("addBtn");
const input = document.getElementById("newItem");
const list = document.getElementById("things-list");

// Event listener to add item
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value !== "") {
    const li = document.createElement("li");
    li.textContent = value;
    list.appendChild(li);
    input.value = ""; // clear input
  }
});

// Optional: press Enter key to add
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
