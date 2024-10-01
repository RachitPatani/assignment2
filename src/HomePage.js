// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ contacts, onDelete }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {contacts.map((contact, index) => (
          <div key={index} style={tileStyle}>
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>Phone: {contact.phone}</p>
            <p>Email: {contact.email}</p>
            <p>Address: {contact.addressType} </p>
            <p>{contact.address}</p>
            <button onClick={() => navigate(`/contact/${index}`)}>Edit</button>
            <p/>
            <p></p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/contact')} >Add Contact</button>
    </div>
  );
}

const tileStyle = {
  border: '1px solid black',
  padding: '10px',
  margin: '10px',
  width: '200px',
  position: 'relative',
  
};

export default HomePage;
