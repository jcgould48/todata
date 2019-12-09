document.querySelector('.clear-complete').addEventListener('click', () => {
    
      currentTodos = justNotComplete(currentTodos)
  
    refreshTodos()
  })