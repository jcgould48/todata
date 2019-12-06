
// A function that adds an item to our todo list.
// const addTodo = function(todo) {
//   todos.push(todo);
// }

const addTodo = (text) => {
  const priority = document.querySelector('.priority');

  let todo = {
    text: text,
    id: todos.length,
    complete: false,
    priority: Number(priority.value),
  }
  todos.push(todo);

  return todo;
}



