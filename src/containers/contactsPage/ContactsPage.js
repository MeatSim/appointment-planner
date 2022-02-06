import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = () => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!checkForDuplicate) {
      props.newContact(e.name, e.phone, e.mail);
      setName('');
      setPhone(null);
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  // does this replace change handler for name field?
  const checkForDuplicate = () => {
    props.contacts.forEach((contact) => {
      if (contact.name === name) {
        return true;
      }
    });
    return false;
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          contacts={props.contacts}
        />
      </section>
    </div>
  );
};
