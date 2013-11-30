
# HTML5 TODO App

A series of insturctions and example code for a basic HTML5 TODO app.

# What is HTML5?

HTML5 is the latest evolution of the standard that defines HTML. This inludes:

* A new version of HTML, with new elements, attributes, and behaviors.
* A larger set of technologies that allows more diverse and powerful Web sites and applications.

The larger set includes new technologies as well as improvements to old standards:

* CSS3 (animations, transforms)
* JS/ECMAScript
* Fullscreen API
* Drag and Drop
* Canvas & WebGL
* Offline & Storage
* Web Sockets
* WebRTC
* **Touch Events**
* Geolocation
* Camera API

Resources:

* https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
* http://diveintohtml5.info/
* http://en.wikipedia.org/wiki/ECMAScript

# Set up

Fire up your terminal and start by creating a directory for your project.

    mkdir my-todo-app

Now change into your directory with the `cd` command:

    cd my-todo-app

We really only need a few files but I like to orginize my projects this way:

    - my-todo-app
      +- public
      |  +- index.html
      |  +- todo.js
      + README.md

You can create more directories using the `mkdir` command, and empty files with the touch command:

    mkdir public
    touch public/index.html
    touch public/todo.js

**TIP:** most commands have a way to learn about how to use them. Try typing `man mkdir` to learn more about it. The `man` command is useful to learn about most commands.

Resources:

* http://en.wikipedia.org/wiki/Mkdir
* http://en.wikipedia.org/wiki/Touch_(Unix)
* http://en.wikipedia.org/wiki/Cd_(command)

# Adding JS

Add the JS to your HTML file using a script tag. You can [learn about script tags on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script).

    <script src="todo.js"></script>

## Paths

All paths are relative to the `cwd` or in HTML relative to the file.

`.` means in this directory

`..` means back up one directory

`../browser` means back out of this directory and into one called browser

`/foo.html` means the `foo.html` file living at the document root

`bar.html` means the `bar.html` file living at next to the file

# domready

Add a DOMContentLoaded event handler:

    document.addEventListener('DOMContentLoaded', function(event) {
        console.log('DOM loaded')
    })

* https://developer.mozilla.org/en-US/docs/Web/Reference/Events/DOMContentLoaded

# CHECK YOUR WORK!

Open Google Chrome and visit your index. Open the debugger by pressing the "option + command + i" keys.

You should see your message that you passed to `console.log`.

# Setting up the HTML

We should add a form to the HTML page and a container to hold the items in our todo list.

    <h1>TODO List</h1>

    <form class="js-add-todo">
      <label>
        Add:
        <input placeholder="New item">
      </label>
    </form>

    <form class="todo-list">
    </form>

I like to add classes to things in a way that makes it clear when JS is going to interact with a DOM node. In the example above the class name `js-add-todo` is very clear about what is going to happen when that link gets clicked.

Anything without the `js-` prefix can be used as normal CSS selectors.

# Adding a click handler

Now we need to make our link do something via our JS instead of it's default behavior. First create a variable for the DOM element inside the `domready` callback using the `document.querySelector()` method.

    var form = document.querySelector('.js-add-todo')

We can add an event handler using `link.addEventListener()`

    form.addEventListener('submit', onsubmit)

And then define a function called `onclick`

    function onsubmit(event){
      // Prevent default behavior and the even from bubbling up
      event.stopPropagation()
      event.preventDefault()

      var form =
      var input =

      console.log('submitted!')
    }


Resources:

* https://developer.mozilla.org/en-US/docs/Web/API/document.querySelector
* https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener

# Making the link do something

Now we need the link to append
