# JavaScript methods used in this repository

## `document.querySelector()`

- **Description**: This method returns the first element that matches a specified CSS selector in the document. It's widely used for DOM manipulation, allowing you to select elements like IDs, classes, or tags.

- **Usage**: Primarily used when you need to select a single element to manipulate its attributes, content, or attach event listeners.

- **Context**: This method is used for efficiently selecting and handling elements like buttons, inputs, and containers within a web application.

- **Example**:

```javascript
const button = document.querySelector(".btn-add");
```

## `document.createElement()`

- **Description**: This method creates an HTML element specified by tagName. It's used to dynamically generate new elements within the DOM.
- **Usage**: Often used in scenarios where new elements need to be dynamically created, such as adding new list items, buttons, or other UI components.
- **Context**: Used when building dynamic UIs, where elements are created on the fly and appended to the DOM structure.
- **Example**:

```javascript
const li = document.createElement("li");
```

## `element.appendChild()`

- **Description**: This method inserts a node as the last child of a parent element. It is useful when you want to insert a newly created or existing node into another node.
- **Usage**: Used in dynamic applications when you need to attach child elements, such as adding new items to lists or placing buttons inside list items.
- **Context**: Particularly useful for updating DOM structures based on user interaction or data loading.
- **Example**:

```javascript
li.appendChild(button);
```

## `element.classList.add()`

- **Description**: Adds one or more class names to an element's `classList`. It is helpful for toggling UI changes like styling and behaviors without affecting the rest of the code.
- **Usage**: Use this method to add specific classes to elements to change their appearance or behavior via CSS and JavaScript.
- **Context**: Often used for managing active states, visibility toggling, or adding styling classes to elements based on interaction.
- Example:

```javascript
li.classList.add("active");
```

## `element.classList.contains()`

- **Description**: This method checks if an element contains a specific class. It returns `true` if the class is present, and `false` otherwise.
- **Usage**: Use it when you need to check whether a certain class has been applied to an element before performing an action, such as removing or adding other classes or event-driven changes.
- **Context**: Frequently used in event handling where class-based conditions are required.
- **Example**:

```javascript
if (element.classList.contains("clear")) {
  // do something
}
```

## `localStorage.setItem()`

- **Description**: This method stores data in the browser's `localStorage` as a key-value pair. Data stored in `localStorage` persists even after the browser is closed, making it ideal for saving user settings, preferences, or other data that should persist.
- **Usage**: Ideal for storing user-specific settings or states that should persist across sessions. The data remains until explicitly removed or cleared.
- **Context**: Often used for saving things like preferences, tasks in a to-do list, or form data that should be retrieved after the user revisits the page.
- **Example**:

```javascript
localStorage.setItem("tasks", tasksJSON);
```

## `localStorage.getItem()`

- **Description**: Retrieves data from the `localStorage` by key. If no data is found for the given key, it returns `null`.
- **Usage**: Retrieve persisted data from the browser to be used when reloading a page, for instance, to restore tasks in a to-do list.
- **Context**: Commonly used in conjunction with `setItem` for persisting data across browser sessions, such as user preferences, states, or task lists.
- **Example**:

```javascript
const tasks = localStorage.getItem("tasks");
```

## `JSON.stringify()`

- **Description**: Converts a JavaScript object or array into a JSON string. It is commonly used when storing objects or arrays in `localStorage` because localStorage can only store strings.
- **Usage**: Ideal for converting complex objects to strings when you need to store them as data, particularly in the context of `localStorage` or transmitting data.
- **Context**: Used for serialization of objects when storing them or transmitting them in a structured format.
- **Example**:

```javascript
const tasksJSON = JSON.stringify(taskList);
```

## `JSON.parse()`

- **Description**: Parses a JSON string and converts it back into a JavaScript object. It's used to retrieve structured data that was previously serialized using `JSON.stringify()`.
- **Usage**: Use when you need to restore an object or array that was stored as a JSON string in `localStorage` or received via an API.
- **Context**: Critical for deserializing data retrieved from storage or APIs into usable JavaScript objects or arrays.
- **Example**:

```javascript
const toDoList = JSON.parse(tasksJSON);
```

## `element.addEventListener()`

- **Description**: Adds an event listener to an element, which allows you to execute a function when a specified event occurs (e.g., click, keypress).
- **Usage**: Utilized for handling user interactions such as clicks, keypresses, or other events to trigger specific actions or changes in the UI.
- **Context**: Essential for interactive applications that respond to user input or browser events.
- **Example**:

```javascript
btnAdd.addEventListener("click", handleAddTask);
```

## `Array.from()`

- **Description**: Creates a new array instance from an array-like or iterable object. It’s helpful when you want to manipulate DOM elements as arrays, for example, NodeLists returned by querySelectorAll.
- **Usage**: Use this to convert array-like objects like **NodeLists** into true arrays that can be manipulated using array methods such as map().
- **Context**: Useful when working with collections of DOM elements, enabling the use of array operations.
- **Example**:

```javascript
const taskItems = Array.from(tasks.querySelectorAll("li"));
```
