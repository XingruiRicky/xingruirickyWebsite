import React, { useState } from 'react';
import "./MailingField.css"

function MailtoLinkSender() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const email = 'xingruiricky@gmail.com';

  const handleSendMail = () => {
    const mailtoLink = `mailto:${email}}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      <div>Please contact me directly at <a id='email' onClick={handleSendMail}>xingruiricky@gmail.com</a> or through this form.</div>
      <br></br>
      <br></br>
      <div id='Form'>
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
        <button id='sendBtn'>Send</button>
      </div>
    </div>

  );
}

export default MailtoLinkSender;