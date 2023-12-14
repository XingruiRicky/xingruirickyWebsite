import React, { useState } from 'react';
import "./MailingField.css"

function MailtoLinkSender() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const email = 'xingruiricky@gmail.com'; 

  const handleSendMail = () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id='Mail'>
      <input
        id='titleField'
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Mail Title"
        style={{ marginBottom: '10px' }}
      />
      <textarea
        id='messageField'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Your Message"
        style={{ marginBottom: '10px' }}
      />
      <button onClick={handleSendMail}>Send</button>
    </div>
  );
}

export default MailtoLinkSender;