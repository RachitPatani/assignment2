// src/ContactPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './cpage.css'

function ContactPage({ contacts, onSave }) {
  const { id } = useParams();
  const contact = contacts[id] || {};
  const [firstName, setFirstName] = useState(contact.firstName || '');
  const [lastName, setLastName] = useState(contact.lastName || '');
  const [phone, setPhone] = useState(contact.phone || '');
  const [email, setEmail] = useState(contact.email || '');
  const [addressType, setAddressType] = useState(contact.addressType || 'Home');
  const [address, setAddress] = useState(contact.address || '');
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isFormValid =
      firstName && lastName && phone.length === 10 && /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email);
    setFormValid(isFormValid);
  }, [firstName, lastName, phone, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { firstName, lastName, phone, email, addressType, address };
    onSave(id, newContact);
    navigate('/');
  };

  return (
    <div className='formdiv' >
      <h1>{id !== undefined ? 'Edit Contact' : 'Create Contact'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            pattern="[A-Za-z\s/. -]*"
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            pattern="[A-Za-z\s/. -]*"
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="\d{10}"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Address Type</label>
          <label>
            <input
              type="radio"
              value="Home"
              checked={addressType === 'Home'}
              onChange={() => setAddressType('Home')}
            /> Home
          </label>
          <label>
            <input
              type="radio"
              value="Office"
              checked={addressType === 'Office'}
              onChange={() => setAddressType('Office')}
            /> Office
          </label>
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="button" onClick={() => navigate('/')}>Back</button>
        <p></p>
        <button type="submit" disabled={!formValid}>Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
