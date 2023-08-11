import List from './List';
import Form from './Form';
import React, { useState, useEffect } from 'react';
import './style.css'
function Contacts() {
  
  const [contacts, setContacts] = useState([{
    fullname:'Beyza',
    phone_number:1234567
},
{
    fullname:'Zeynep',
    phone_number:9876543
},
]);
  
  useEffect(() => {

    console.log(contacts);

  }, [contacts]);

  
  return (
    <div id="container">
      <h3>CONTACTS</h3>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts