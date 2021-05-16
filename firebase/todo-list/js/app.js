const todoForm = $('#todo-form')
const taskInput = $('#task-input')
const todoList = $('ul.list-group')

todoForm.submit(function(event) {
  // This will stop the default behaviour/action of the form
  // when submitted (in this case, GET request to the 
  // current url (refreshing the page). We need to do this because
  // if the pagge refreshes then the event handler code will not
  // be run
  event.preventDefault()

  // trim() will remove beginning and trailling spaces in a string
  // and it would also turn empty spaces into an empty string "",
  // making it falsy and preventing it from being prepended to the list
  const task = taskInput.val().trim()
  
  // Make each <li> a flex container by using "d-flex". "justify-content-between"
  // sets the "justify-content" property to "space-between".
  // <span> and <small> are the flex-items
  // The custom data-* attribute can store info about the task
  if (task) {
    todoList.prepend(`
      <li class="list-group-item d-flex justify-content-between">
        <span>${task}</span> 
        <small>
          <a href="#" data-is-complete="false" class="mark-complete-link">Mark Complete</a>
          |
          <a href="#" class="delete-link">Delete</a>
        </small>
      </li>
    `)
  }

  // Reset the form after prepending to the list with either:
  this.reset() // DOM method
  taskInput.val("") // jQuery method
})

// The following will only add event listeners to elements that 
// already exist in the DOM when the DOM first loads because that's 
// when this script is run. When loading initially, there are no
// delete links on the page, therefore this won't work.
$('.delete-link').on('click', function(event) {
  $(this).closest('li.list-group-item').remove()
})

// The second optional param to .on() is a css selector string to
// filter the descendants of the selected elements that trigger
// the event. The event handler doesn't get invoked unless the element
// that was clicked on matches the selector. "this" refers to 
// the delete-link that fired the event
$(todoList).on('click', '.delete-link', function(event) {
  // closest() will traverse up in the DOM and give us the first
  // ancestor that matches the css selector
  $(this).closest('li.list-group-item').remove()
})

$(todoList).on('click', '.mark-complete-link', function(event) {
  // read the value of data-is-complete off of the mark-complete-link
  const isComplete = $(this).data('is-complete') 
  
  if (isComplete) {
    $(this)
      .data('is-complete', false)
      .text('Mark Complete')
      .parent() // <small>
      .siblings() // <span>
      .css('color', 'black')
      .css('text-decoration', 'none')
  } else {
    $(this)
      .data('is-complete', true)
      .text('Mark Incomplete')
      .parent() // <small>
      .siblings() // <span>
      .css('color', 'red')
      .css('text-decoration', 'line-through')
  }
})
