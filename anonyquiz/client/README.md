Asides for the regular npx create-react-app packages, I have utilized the following external libraries:

react-redux - to create central store in the app
react-router-dom - to create routing
axios - make the API calls




In-Depth Architecture and functionalities
[*] Note that this README.md is written DURING development and some files might not exist due to being placeholders for hard-coded code before dynamic implementations. The purpose of this file is to explain the process of engineering and problem solving behind this program.

ROUTING - Inside of App.js I have created the app's routing using react-router-dom library.

COMPONENTS - Components are stored in ./src/components and the tag attributes are assigned to elements via JSX
I have used useRef to get the input box value with a default value of 'null'
'Click' Event Handlers are implemented in a method of adding 'onClick' as an attribute to the <button> tag of an interactive button, referencing a function that is created in the same component, above the 'return' statement.
As for the Questions, I have used a Questions component with Placeholder values for Questions and Answers, calling an onSelect function for the onChange event handler.
I set a 'checked' state for the answers as well, using the useState hook, which can be modified by setChecked when state of the radio buttons (of the answers) change. (with a default value of undefined)
In the label of the radio buttons, we give the htmlFor attribute the value of the button's ID (q1-option for ex.)

The data.js file in the ./src/database/ folder will be a questions placeholder in JSON syntax.