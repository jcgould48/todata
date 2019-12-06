
const clearTodos = function() {
    const list = document.querySelectorAll('.complete');
    while(list.hasChildNodes()) {
      list.firstChild.remove();
    }
  }



document.querySelector('clear.complete').addEventListener('click')