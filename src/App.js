import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Counter from './Counter';
import TodoList from './TodoList';
import RegistrationForm from './RegistrationForm';
import ApiFetching from './ApiFetching';
import ChatInterface from './ChatInterface';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <nav>
          <h1>React Practice Assignment</h1>
          <ul>
            <li><Link to="/counter">1. Counter App</Link></li>
            <li><Link to="/todo">2. To-Do List</Link></li>
            <li><Link to="/registration">3. Student Registration</Link></li>
            <li><Link to="/api">4. API Fetching</Link></li>
            <li><Link to="/chat">5. Chat Interface</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/counter" element={<div><Link to="/">Back</Link><Counter /></div>} />
          <Route path="/todo" element={<div><Link to="/">Back</Link><TodoList /></div>} />
          <Route path="/registration" element={<div><Link to="/">Back</Link><RegistrationForm /></div>} />
          <Route path="/api" element={<div><Link to="/">Back</Link><ApiFetching /></div>} />
          <Route path="/chat" element={<div><Link to="/">Back</Link><ChatInterface /></div>} />
          <Route path="/" element={<p>Please select an exercise from the menu above.</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;