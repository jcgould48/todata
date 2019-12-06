const input = document.querySelector('.todo-input');

document.querySelector('.add-todo').addEventListener('click', function(){
  printTodo(addTodo(input.value));
  input.value = '';
})