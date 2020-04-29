import React from 'react';

import './App.css';
import Articles from './components/Articles';
import { AuthProvider } from './context/AuthContext';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Articles />
            </AuthProvider>
        </div>
    );
}

export default App;
