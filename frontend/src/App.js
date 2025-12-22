// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const [currentUser, setCurrentUser] = useState(null);

    // Check for stored username on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('todo_username');
        if (storedUser) {
            setCurrentUser(storedUser);
        }
    }, []);

    const handleLogin = (username) => {
        setCurrentUser(username);
    };

    const handleLogout = () => {
        // Clear username from local storage and state
        localStorage.removeItem('todo_username');
        setCurrentUser(null);
    };

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between my-4">
            <h1>Full Stack Todo App</h1>
            <img src={require("./images/logo512.png")} alt="Todo Logo" style={{ width: '100px', height: '100px' }} />
            </div>
            {/* Conditional rendering based on login status */}
            {currentUser ? (
                <TodoList username={currentUser} onLogout={handleLogout} />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;