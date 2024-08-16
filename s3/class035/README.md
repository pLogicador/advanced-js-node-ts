# DOM Manipulation with Browser Objects

> The Document Object Model ([DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)) is a programming
> interface that represents the structure of an HTML or XML document in a hierarchical manner. This structure allows developers to
> dynamically access, modify, or manipulate the content and appearance of a document. In other words, the DOM turns the document
> into a set of objects that can be manipulated via scripts, such as JavaScript.

# BOM - Browser Object Model

> The Browser Object Model (BOM), on the other hand, refers to the set of objects and methods provided by the browser for
> interacting with the environment outside the document context. The BOM provides access to browser-specific functionalities and
> resources, such as controlling browser windows, navigating through the history, and managing cookies. Unlike the DOM, which
> focuses on the document structure, the BOM deals with browser interactions and features.

## In the DOM hierarchy:

- The `window` object is the top-level element that represents the browser's window. It is the "parent" of the entire DOM structure.
- The `document` object is a child of `window` and represents the HTML document. It serves as the entry point for accessing and manipulating HTML elements.
- The `html` element is the direct child of `document` and acts as a container for the `head` and `body` elements.
- `head` and `body` are both children of `html`. The `head` element typically contains meta-information, such as links to CSS files and the page's title. The `body` element contains the visible content of the page, such as text, images, and other elements.
- Inside the `body`, elements like `section` and `h1` are nested to organize content in a semantic and hierarchical manner.
- A `text node` (like `"..."`) within an `h1` element represents the actual text content that will be displayed in the browser.

## Here's the hierarchy represented:

```bash
window (top-level parent)
    document (child of window, parent of html)
        html (child of document, parent of head and body)
            head (child of html)
            body (child of html)
                section (child of body)
                    h1 (child of section)
                        "..." (text node, child of h1)
```

> Note: The **DOM** is used to access and modify document elements, while the **BOM** handles browser-specific aspects and resources.

# InnerText vs InnerHTML, and Understanding createElement, createTextNode, and appendChild

## 1. `innerText` vs `innerHTML`

### `innerText`

- **Usage**: `innerText` is used to set or retrieve the text content of an element.
- **Behavior**: It reflects the visible text content of a node, meaning it respects styling like `display`: none or
  `visibility: hidden`. It also automatically escapes HTML, meaning any HTML tags within the text will be treated as text rather
  than rendered as HTML.
- **Performance**: `innerText` can be slower than innerHTML because it has to compute the visible text after CSS styles are applied.
- **Security**: `innerText` is safer when dealing with user-generated content because it does not interpret HTML tags, thus
  preventing potential **XSS (Cross-Site Scripting)** attacks.

### `innerHTML`

- **Usage**: `innerHTML` is used to set or retrieve the HTML content of an element.
- **Behavior**: It parses and renders the HTML tags within the content, making it possible to inject HTML markup directly into an
  element. This means you can insert complex HTML structures within an element.
- **Performance**: `innerHTML` is generally faster for inserting large amounts of content since it bypasses the text parsing that
  innerText does.
- **Security**: `innerHTML` is more vulnerable to XSS attacks if user-generated content is injected without proper sanitization, as
  it will render any HTML tags, including `<script>` tags.

### **When to Use Each**:

- Use `innerText` when you want to display plain text and ensure no HTML is interpreted, especially when dealing with user input.
- Use `innerHTML` when you need to insert HTML content, like adding a list of elements dynamically.

## 2. Understanding `createElement`, `createTextNode`, and `appendChild`

### `createElement(tagName)`

- **Description**: `createElement` is a method used to create a new HTML element of the specified type (e.g., `div`, `p`, `span`).
- **Usage**: `const element = document.createElement('tagName');`
- **Purpose**: It’s the primary way to create new elements dynamically in the DOM. Once created, you can set attributes,
  classes, IDs, or styles on this element before adding it to the DOM.

### `createTextNode(data)`

- **Description**: `createTextNode` is a method used to create a new text node containing the specified text.
- **Usage**: `const textNode = document.createTextNode('some text');`
- **Purpose**: It’s used to create plain text that can be added to an element. Unlike `innerText`,
  this method creates a separate text node that can be added to any element using `appendChild`.

### `appendChild(node)`

- **Description**: `appendChild` is a method used to add a new child node to a specified parent node.
- **Usage**: `parentElement.appendChild(childElement);`
- **Purpose**: It appends a node (either an element or a text node) as the last child of the specified parent element.
  This method is essential for dynamically building or modifying the DOM structure.

# Putting It All Together:

> When dynamically adding content to a webpage, these methods often work together. First, use `createElement` to create an
> element, then use `createTextNode` to create any necessary text nodes, and finally, use `appendChild` to insert these nodes into
> the desired location in the DOM.
