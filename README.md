# JavaScript Calculator Project

## 1. Project Overview

This project is a basic **Calculator Web Application** developed using three main technologies:

* **HTML** – Used to create the structure and buttons of the calculator.
* **CSS** – Used to design and style the calculator.
* **JavaScript** – Used to add functionality and perform calculations.

The main purpose of this project was not only to create a working calculator but also to understand how **HTML, CSS, and JavaScript work together** to create an interactive website.

---

# 2. Project Files

The project contains three main files:

```text
Calculator/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

This file contains the **structure and content** of the calculator.

### `style.css`

This file contains the **design and appearance** of the calculator.

### `script.js`

This file contains the **logic and functionality** of the calculator.

---

# 3. HTML File — `index.html`

HTML is used to create the basic structure of the calculator.

The calculator contains a display section and several buttons.

Example:

```html
<div class="display"></div>

<button class="delete" onclick="calculate('X')">X</button>
<button class="reset" onclick="calculate('AC')">AC</button>
<button class="percentage" onclick="calculate('%')">%</button>
<button class="divide" onclick="calculate('/')">/</button>
```

## Understanding the Code

### `<div class="display">`

```html
<div class="display"></div>
```

This creates the area where the calculator displays the numbers and results.

The class:

```html
class="display"
```

allows us to select this element using CSS and JavaScript.

---

## Calculator Buttons

Each calculator button is created using:

```html
<button></button>
```

For example:

```html
<button class="seven" onclick="calculate('7')">7</button>
```

There are two important parts here.

### `class="seven"`

The class is mainly used to identify and style the button using CSS.

### `onclick="calculate('7')"`

The `onclick` event runs the JavaScript function when the user clicks the button.

When the user clicks `7`, JavaScript receives:

```javascript
calculate('7');
```

Similarly:

```html
<button class="add" onclick="calculate('+')">+</button>
```

calls:

```javascript
calculate('+');
```

This allows one function to handle many different buttons instead of writing a separate function for every button.

---

# 4. Multiplication Button

For multiplication, the button displays `X`, but JavaScript uses `*`.

```html
<button class="multiply" onclick="calculate('*')">X</button>
```

The reason is that JavaScript uses:

```text
* 
```

as its multiplication operator.

The user sees:

```text
X
```

but the program receives:

```text
*
```

---

# 5. JavaScript File — `script.js`

JavaScript is responsible for making the calculator interactive.

The main variable is:

```javascript
let calculation = '';
```

## Understanding `let`

`let` creates a variable whose value can be changed later.

Here:

```javascript
calculation
```

stores the expression being entered by the user.

Initially:

```text
calculation = ''
```

means that the calculator is empty.

If the user presses:

```text
2
```

the value becomes:

```text
2
```

If the user then presses:

```text
+
```

it becomes:

```text
2+
```

If the user presses:

```text
5
```

it becomes:

```text
2+5
```

---

# 6. The `calculate()` Function

The main function is:

```javascript
function calculate(value) {

    calculation += value;

    console.log(calculation);

    document.querySelector('.display').innerHTML = calculation;
}
```

## `function`

```javascript
function calculate(value)
```

creates a function called `calculate`.

Instead of creating separate functions for every button, we use one function and give it different values.

For example:

```javascript
calculate('2');
calculate('+');
calculate('5');
```

---

# 7. Function Parameter

The word:

```javascript
value
```

is a parameter.

It receives whatever value is passed to the function.

For example:

```html
<button onclick="calculate('7')">7</button>
```

passes:

```text
7
```

to:

```javascript
calculate(value)
```

Therefore:

```text
value = '7'
```

---

# 8. The `+=` Operator

The following line is very important:

```javascript
calculation += value;
```

It means:

```javascript
calculation = calculation + value;
```

For example, if:

```javascript
calculation = '2';
```

and:

```javascript
value = '+';
```

then:

```javascript
calculation += value;
```

produces:

```text
2+
```

Then if the user presses `5`:

```text
2+5
```

The complete expression is stored in the `calculation` variable.

---

# 9. `console.log()`

The following code:

```javascript
console.log(calculation);
```

prints the current calculation in the browser's developer console.

For example, after pressing:

```text
2 + 5
```

the console will show:

```text
2+5
```

This is useful for **debugging** because we can check whether our JavaScript is receiving the correct values.

---

# 10. `querySelector()`

One of the most important concepts in this project is:

```javascript
document.querySelector('.display')
```

`querySelector()` is used to find an HTML element using a CSS selector.

Our HTML contains:

```html
<div class="display"></div>
```

Therefore, JavaScript can find it using:

```javascript
document.querySelector('.display')
```

The `.` means that we are selecting a **class**.

---

# 11. `innerHTML`

We use:

```javascript
.innerHTML
```

to put content inside the selected HTML element.

Therefore:

```javascript
document.querySelector('.display').innerHTML = calculation;
```

means:

1. Find the element with the class `display`.
2. Take the value stored in `calculation`.
3. Put that value inside the display.

For example, if:

```javascript
calculation = '25+10';
```

the display will show:

```text
25+10
```

This is an example of **DOM manipulation**.

---

# 12. Performing the Calculation

Simply storing:

```text
25+10
```

does not automatically produce:

```text
35
```

Therefore, the `=` button needs special logic.

A basic implementation is:

```javascript
if (value === '=') {
    calculation = eval(calculation);
}
```

The `if` statement checks whether the user pressed `=`.

If the expression is:

```text
25+10
```

then:

```javascript
eval('25+10')
```

returns:

```text
35
```

The result is then stored back in:

```javascript
calculation
```

---

# 13. `if` Statement

The `if` statement allows the program to make decisions.

Example:

```javascript
if (value === '=') {
    calculation = eval(calculation);
}
```

The program asks:

```text
Is the button value equal to "="?
```

If yes, it performs the calculation.

This introduced the concept of **conditional logic**.

---

# 14. Reset / AC Button

The AC button is used to clear the calculator.

The logic can be:

```javascript
else if (value === 'AC') {
    calculation = '';
}
```

This changes:

```text
25+10
```

back to:

```text
''
```

The display then becomes empty.

---

# 15. Delete Button

The delete button can remove the last character.

For example:

```text
1234
```

becomes:

```text
123
```

using:

```javascript
calculation = calculation.slice(0, -1);
```

### `slice()`

The `slice()` method is used to extract part of a string.

Here:

```javascript
slice(0, -1)
```

means to take everything except the last character.

---

# 16. Final Basic JavaScript Structure

The calculator logic can therefore be structured like this:

```javascript
let calculation = '';

function calculate(value) {

    if (value === '=') {
        calculation = eval(calculation);
    }

    else if (value === 'AC') {
        calculation = '';
    }

    else if (value === 'X') {
        calculation = calculation.slice(0, -1);
    }

    else {
        calculation += value;
    }

    console.log(calculation);

    document.querySelector('.display').innerHTML = calculation;
}
```

This version uses:

* Variables
* Functions
* Parameters
* `if / else if / else`
* Operators
* Strings
* `slice()`
* `console.log()`
* `querySelector()`
* `innerHTML`
* DOM manipulation

---

# 17. CSS File — `style.css`

CSS is responsible for the visual appearance of the calculator.

For example:

```css
.display {
    font-size: 40px;
    text-align: right;
}
```

## `font-size`

```css
font-size: 40px;
```

controls the size of the text displayed on the calculator.

## `text-align`

```css
text-align: right;
```

moves the calculator text to the right side, similar to a real calculator.

---

# 18. Calculator Size

The calculator itself can be given a fixed size:

```css
.calculator {
    width: 320px;
    height: 480px;
}
```

`width` controls the horizontal size.

`height` controls the vertical size.

---

# 19. Border

A border can be added around the calculator:

```css
.calculator {
    border: 5px solid black;
}
```

The `5px` controls the thickness of the border.

For example:

```text
2px  → thin
5px  → medium
10px → thick
```

---

# 20. Button Styling

The buttons can also be styled using their classes.

Example:

```css
button {
    width: 60px;
    height: 60px;
    font-size: 20px;
    border-radius: 10px;
}
```

### `width`

Controls the button width.

### `height`

Controls the button height.

### `font-size`

Controls the size of the number or operator.

### `border-radius`

Makes the corners rounded.

---

# 21. How the Three Files Work Together

The complete flow of the project is:

```text
HTML
  ↓
Creates calculator buttons and display
  ↓
CSS
  ↓
Designs the calculator
  ↓
JavaScript
  ↓
Detects button clicks
  ↓
Updates calculation
  ↓
Updates the display
  ↓
Performs the calculation when "=" is pressed
```

For example, when the user clicks:

```text
7
```

HTML triggers:

```javascript
calculate('7');
```

JavaScript updates:

```javascript
calculation += '7';
```

Then:

```javascript
document.querySelector('.display').innerHTML = calculation;
```

updates the HTML display.

The same process happens for every number and operator.

---

# 22. Concepts Learned From This Project

Through this project, I understood several important web-development concepts:

### HTML

* Creating elements using HTML tags
* Using `<button>`
* Using `<div>`
* Using classes
* Using the `onclick` event

### CSS

* Width and height
* Borders
* Font size
* Text alignment
* Border radius
* Button styling
* Layout and positioning

### JavaScript

* Variables using `let`
* Functions
* Function parameters
* String manipulation
* `if / else if / else`
* Operators
* `console.log()`
* `slice()`
* DOM manipulation
* `querySelector()`
* `innerHTML`
* Handling user interaction

---

# 23. Conclusion

This calculator project helped me understand how **HTML, CSS, and JavaScript work together** to build an interactive web application.

HTML provides the structure, CSS provides the design, and JavaScript provides the functionality.

The most important concept I learned was **DOM manipulation**, where JavaScript can select an HTML element using `querySelector()` and dynamically change its content.

The project also helped me understand how functions can reduce repeated code. Instead of creating a separate function for every calculator button, one `calculate()` function can receive different values and process them accordingly.

Overall, this project provided practical experience with the fundamentals of **frontend web development and JavaScript programming**.
