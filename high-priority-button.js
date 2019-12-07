document.querySelector('.high-priority-first').addEventListener('click', (event) => {
    const {target} = event;
  
    if (target.innerText === 'Only High Priority') {
      target.innerText = 'Original Order';
      currentTodos = priority2First(currentTodos)
    } else {
      target.innerText = 'Only High Priority';
      currentTodos = todos.slice();
      if (showingPriorities) {
        currentTodos = namesAndPriorities(currentTodos);
      }
    }
  
    refreshTodos()
  })