import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigate to={"/products"}/>} path="/"/>
        <Route element={<Main />} path="/products/" />
        <Route element={<Detail />} path="/products/:id" />
      </Routes>
    </div>
  );
}

export default App;
