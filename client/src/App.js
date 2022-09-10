import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Form from './components/Form';
import ViewPet from './components/ViewPet';
import EditForm from './components/EditForm';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={ <Home /> } path="/" default/>
          <Route element={ <Form /> } path="/pet/create" />
          <Route element={ <ViewPet /> } path="/pet/view/:id" />
          <Route element={ <EditForm /> } path="/pet/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;