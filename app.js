let items = [];
function addItem() {
  const newItem = document.getElementById("new-item").value; 
  if (newItem !== "") { 
    items.push(newItem); 
    displayItems(); 
    document.getElementById("new-item").value = ""; 
  }
}
function editItem(index) {
  const newItem = prompt("Edit item:", items[index]); 
  if (newItem !== null) { 
    items[index] = newItem; 
    displayItems(); 
  }
}
function deleteItem(index) {
  items.splice(index, 1); 
  displayItems(); 
}
function displayItems() {
  const list = document.getElementById("list"); 
  list.innerHTML = ""; 
  for (let i = 0; i < items.length; i++) { 
    const li = document.createElement("li"); 
    li.innerHTML = items[i]; 
    const editButton = document.createElement("button"); 
    editButton.innerHTML = "Edit";
    editButton.onclick = function() { editItem(i); }; 
    const deleteButton = document.createElement("button"); 
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() { deleteItem(i); }; 
    li.appendChild(editButton); 
    li.appendChild(deleteButton); 
    list.appendChild(li); 
  }
}
displayItems();