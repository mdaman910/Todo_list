let todoList = [
  {
    item : 'Buy Material', 
    dueDate: '01/02/2024',
  },
  {
    item: 'Go to Work',
    dueDate: '01/02/2024',
  }
];
displayItem();
function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item:todoItem, dueDate:todoDate});
  inputElement.value = ' ';
  dateElement.value = ' ';
  displayItem();
}
function displayItem(){
  let containerElement = document.querySelector('.container-todo');
  let newHtml = ' '
  for(let i=0; i<todoList.length; i++){
    let item = todoList[i].item;
    let dueDate = todoList[i].dueDate;
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="todoList.splice(${i} , 1); displayItem();" >Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}