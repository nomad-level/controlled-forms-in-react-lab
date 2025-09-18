// Main App component for the Bookshelf project.
// This file should ONLY contain the App component and imports.
// All CSS should be in .css files, and ESLint config should be in eslint.config.js.

import { useState } from 'react';
import './App.css'; // Import your CSS file for styles
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';

// The App component renders the main heading and the Bookshelf UI.
const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Bookshelf />
    </div>
  );
};

export default App;

// ------------------------------
// EXPLANATION:
// - The raw CSS (body { ... }) was removed from this file.
// - All CSS should go in App.css or index.css, not in .jsx files.
// - The CSS file is imported at the top so styles are applied.
// - This keeps your React code and styles organized and avoids syntax errors.
