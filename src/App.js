// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

function App() {
  const [contacts, setContacts] = useState([]);

  const handleSave = (id, contact) => {
    const newContacts = [...contacts];
    if (id !== undefined) {
      newContacts[id] = contact;
    } 
    else {
      newContacts.push(contact);
    }
    setContacts(newContacts);
  };

  const handleDelete = (id) => {
    const newContacts = contacts.filter((_, index) => index !== id);
    setContacts(newContacts);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage contacts={contacts} onDelete={handleDelete} />} />
        <Route path="/contact/:id" element={<ContactPage contacts={contacts} onSave={handleSave} />} />
        <Route path="/contact" element={<ContactPage contacts={contacts} onSave={handleSave} />} />
      </Routes>
    </Router>
  );
}

export default App;
