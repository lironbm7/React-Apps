Asides for the regular npx create-react-app packages, I have utilized the following external libraries:

react-redux - to create central store in the app
react-router-dom - to create routing
axios - make the API calls




Architecture simplified
ROUTING - Inside of App.js I have created the app's routing using react-router-dom library.

COMPONENTS - Components are stored in ./src/components and the tag attributes are assigned to elements via JSX
I have used useRef to get the input box value with a default value of 'null'