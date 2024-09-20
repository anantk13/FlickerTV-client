import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Main Content - Outlet will render the matched child route */}
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
