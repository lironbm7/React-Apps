import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Element</div>
  },
  {
    path: '/quiz',
    element: <div>Quiz Element</div>
  },
  {
    path: '/result',
    element: <div>Result Element</div>
  }
])

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
