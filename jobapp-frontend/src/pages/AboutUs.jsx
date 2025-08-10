import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const [chat, setChat] = useState([
    { sender: 'bot', text: "Hi! I'm your store assistant. Ask me anything about this site." }
  ]);
  const [input, setInput] = useState('');

  // Simple chatbot response logic
  const getBotResponse = (msg) => {
    if (msg.toLowerCase().includes('order')) return "You can track your orders from your account dashboard.";
    if (msg.toLowerCase().includes('return')) return "Returns are easy! Visit your orders page and select 'Return'.";
    if (msg.toLowerCase().includes('contact')) return "You can reach us at mmdnayeem4705@gmail.com or +1-555-123-4567.";
    if (msg.toLowerCase().includes('payment')) return "We support multiple payment methods. For issues, contact support.";
    return "Thank you for your query. Our team will get back to you soon!";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { sender: 'user', text: input };
    const botMsg = { sender: 'bot', text: getBotResponse(input) };
    setChat([...chat, userMsg, botMsg]);
    setInput('');
  };

  return (
    <div className="container mt-4">
      {/* About Us Section */}
      <div className="d-flex justify-content-center mb-4">
        <div className="card shadow-sm p-4 bg-light rounded-4" style={{ maxWidth: 500, width: '100%' }}>
          <h2 className="text-primary text-center mb-3">About Us</h2>
          <p className="text-secondary" style={{ fontSize: '1.05rem' }}>
            Welcome to Nayeem's Store! We are committed to providing you with the best products and a seamless shopping experience.
            Our team is passionate about quality, customer satisfaction, and innovation. Thank you for choosing us as your trusted shopping destination.
          </p>
        </div>
      </div>
      {/* Contact Us Section */}
      <div className="d-flex justify-content-center mb-4">
        <div className="card shadow-sm p-4 bg-light rounded-4" style={{ maxWidth: 500, width: '100%' }}>
          <h4 className="text-success text-center mb-3">Contact Us</h4>
          <ul className="list-unstyled mb-3">
            <li className="mb-2"><strong>Phone:</strong> <span className="text-muted">+1-555-123-4567</span></li>
            <li className="mb-2"><strong>Email:</strong> <span className="text-muted">support@nayeemsstore.com</span></li>
            <li className="mb-2"><strong>Address:</strong> <span className="text-muted">1234 Market Street, Suite 500, New York, NY 10001, USA</span></li>
            <li className="mb-2"><strong>Customer Support:</strong> <span className="text-muted">Our team is always ready to help you with any issues related to your orders, payments, or product information.</span></li>
          </ul>
          <div className="mb-2">
            <strong>How we help:</strong>
            <ul className="mb-0">
              <li className="text-muted">Quick responses to your queries via our chat assistant or email.</li>
              <li className="text-muted">Guidance on using the website, tracking orders, and returns.</li>
              <li className="text-muted">Friendly support for any technical or account-related problems.</li>
            </ul>
          </div>
          <div>
            <strong>Contact us anytime at:</strong> <span className="text-muted">mmdnayeem4705@gmail.com</span>
          </div>
          <div className="mt-2 text-muted">Feel free to ask anything.</div>
        </div>
      </div>
      {/* Chat Assistant Section */}
      <div className="d-flex justify-content-center mb-4">
        <div className="card shadow-sm p-4 bg-light rounded-4" style={{ maxWidth: 500, width: '100%' }}>
          <h4 className="text-info text-center mb-3">Chat with our Assistant</h4>
          <div style={{
            maxHeight: 180,
            overflowY: 'auto',
            background: '#f8f9fa',
            padding: 10,
            borderRadius: 8,
            marginBottom: 10,
            border: '1px solid #e3e3e3'
          }}>
            {chat.map((msg, idx) => (
              <div key={idx} className={msg.sender === 'user' ? 'text-end mb-2' : 'text-start mb-2'}>
                <span className={`badge px-3 py-2 ${msg.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="d-flex gap-2">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Type your message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              style={{ fontSize: '1rem' }}
            />
            <button type="submit" className="btn btn-success rounded-pill px-4">Send</button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center mt-5 mb-3 bg-dark text-light py-3 rounded">
        <small>
          @All rights are preserved by the Neo organization
        </small>
      </footer>
    </div>
  );
};

export default AboutUs;
