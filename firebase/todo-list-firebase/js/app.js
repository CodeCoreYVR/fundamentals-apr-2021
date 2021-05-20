const todoForm = $('#todo-form')
const taskInput = $('#task-input')
const todoList = $('ul.list-group')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDZgVEJEJOLnR5jDzA94RYjvz9389S4UXI",
  authDomain: "todo-apr-2021.firebaseapp.com",
  projectId: "todo-apr-2021",
  storageBucket: "todo-apr-2021.appspot.com",
  messagingSenderId: "555584921116",
  appId: "1:555584921116:web:24bd1fb341dfc01a45c9d9",
  measurementId: "G-NWECPCN796"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the todos object in our database
const todosFirebaseRef = firebase.database().ref('/todos')

function styleTodos(record) {
  const markCompleteLink = $(`li[data-id=${record.key}] a.mark-complete-link`)
  const isComplete = record.val().isComplete

  if (isComplete) {
    markCompleteLink
      .text('Mark Incomplete')
      .parent() // <small>
      .siblings() // <span>
      .css('color', 'red')
      .css('text-decoration', 'line-through')
  } else {
    markCompleteLink
      .text('Mark Complete')
      .parent() // <small>
      .siblings() // <span>
      .css('color', 'black')
      .css('text-decoration', 'none')
  }
}

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
    todosFirebaseRef.push({
      name: task,
      isComplete: false,
    })
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
  // Everytime a child is added to the todo-list, we'll add a data-id
  // attribute with the key from the database (see "child_added" event)
  const key = $(this).closest('li.list-group-item').data("id")

  // We can read the key from the <li> of the link to telll firebase
  // which task object to delete
  todosFirebaseRef.child(key).remove()
})

$(todoList).on('click', '.mark-complete-link', function(event) {
  const key = $(this).closest('li.list-group-item').data('id')
  const todoRef = firebase.database().ref(`/todos/${key}`)
  
  todoRef.once('value', function(record) { // once() reads a value of the todos/key
    todoRef.update({
      isComplete: !record.val().isComplete
    })
  })
})

// When a task is added to firebase, append the task to the todo list
// The callback will run everytime the page first loads and for every
// existing todo in the database, and it also runs evert time a new 
// task is added.
todosFirebaseRef.on('child_added', function(record) {
  todoList.prepend(`
    <li data-id="${record.key}" class="list-group-item d-flex justify-content-between">
      <span>${record.val().name}</span> 
      <small>
        <a href="#" class="mark-complete-link">Mark Complete</a>
        |
        <a href="#" class="delete-link">Delete</a>
      </small>
    </li>
  `)

  styleTodos(record)
})

todosFirebaseRef.on('child_removed', function(record) {
  // Find the specific <li> with teh data-id attribute of the id of the record that  
  // was deleted. Here we use a css selector: li[attributeName=attributeValue]
  $(`li[data-id=${record.key}]`).remove()
})

// This event listens for when isComplete gets updated when clicking the 
// mark-complete-link
todosFirebaseRef.on('child_changed', function(record) {
  styleTodos(record)
})