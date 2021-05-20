// localStorage, sessionStorage, and cookies are key-value pairs
// They exist for a specific domain for a specific browser on your machine
// The value can only be strings

// Set a key value
sessionStorage.setItem("key", "value")
localStorage.setItem("key", "value")

// Get a value from a key
sessionStorage.getItem("key")
localStorage.getItem("key")

// sessionStorage gets deleted when the browser tab closes
// localStorage exists until we delete it using code
sessionStorage.removeItem("key")
localStorage.removeItem("key")

// Cookies are limited to 4KB for the whole object
// They exist until they expire (we set expiratrion date)
// They are sent along with every request to the server
// The server also sends back cookies after modifying them
// e.g. a server can use cookies to authenticate
// cookies are specific for domain and browser

// No easy way out of the box to use cookies:
// We would usually use an external library to handle them
document.cookie