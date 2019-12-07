document.querySelector('.low-priority').addEventListener('click', (event) => {
    const {target} = event;
  
    if (target.innerText === 'Only Low Priority') {
      target.innerText = 'Original Order';
      currentTodos = priority1First(currentTodos)
    } else {
      target.innerText = 'Only Low Priority';
      currentTodos = todos.slice();
    }
  
    refreshTodos()
  })