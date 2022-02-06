import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form
      onSubmit={props.handleSubmit}  
    >
      ContactForm
      <input
        value={props.name}
        placeholder={'name'}
      />
      <input
        value={props.phone}
        placeholder={'phone number'}
        pattern={/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/}
      />
      <input
        value={props.email}
        placeholder={'email'}
      />
      <button>Submit</button>
    </form>
  );
};
