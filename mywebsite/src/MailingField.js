import React, { useState } from 'react';
import "./MailingField.css"

function MailingField() {
//   const [subject, setSubject] = useState('');
//   const [body, setBody] = useState('');
  const email = 'xingruiricky@gmail.com';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${email}}`;
    window.location.href = mailtoLink;
  };

  // const handleFormSubmit = () => {
  //   const apiUrl = 'http://localhost:3001/api/data'; 
  //   const dataToSend = { yourData: 'Your Data' }; 

  //   fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(dataToSend),
  //   })
  //   .then(response => response.text())
  //   .then(data => {
  //     console.log('Request succeed:', data);
  //   })
  //   .catch(error => {
  //     console.error('Request failed:', error);
  //   });
  // };

  return (
    <div>
      <div>Please contact me directly at <button id='email' onClick={handleEmailClick}>xingruiricky@gmail.com</button> Thank you!</div>
      <br></br>
      <br></br>
      {/* <div id='Form'>
        <input
          id='titleField'
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder=" Title"
          style={{ marginBottom: '10px' }}
        />
        <textarea
          id='messageField'
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Your Message"
          style={{ marginBottom: '10px' }}
        />
        <button id='sendBtn' onClick={handleFormSubmit}>Send</button>
      </div> */}
    </div>

  );
}

export default MailingField;