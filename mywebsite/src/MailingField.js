import React, { useState } from 'react';
import "./MailingField.css"

function MailingField() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const email = 'xingruiricky@gmail.com';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${email}}`;
    window.location.href = mailtoLink;
  };

  const handleFormSubmit = () => {
    const apiUrl = 'http://localhost:3001/api/data'; // 你的 API 端点
    const dataToSend = { yourData: '你的数据' }; // 要发送的数据

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
    .then(response => response.text())
    .then(data => {
      console.log('请求成功:', data);
    })
    .catch(error => {
      console.error('请求错误:', error);
    });
  };

  return (
    <div>
      <div>Please contact me directly at <a id='email' onClick={handleEmailClick}>xingruiricky@gmail.com</a> or through this form.</div>
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
        <button id='sendBtn' onClick={handleFormSubmit}>Send</button>
      </div>
    </div>

  );
}

export default MailingField;