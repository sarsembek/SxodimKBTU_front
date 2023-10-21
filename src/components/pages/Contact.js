import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return (
        <div className="container">
            <h2 className="title">Contact Us</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor='name' className="label">Name</label>
                    <input type="text" id="name" name='name' value={name} onChange={e => setName(e.target.value)} className="input" />
                </div>

                <div className="input-group">
                    <label htmlFor='email' className="label">Email</label>
                    <input type="email" id='email' name='email' value={email} onChange={e => setEmail(e.target.value)} className="input" />
                </div>

                <div className="input-group">
                    <label htmlFor='message' className="label">Message</label>
                    <textarea id='message' name='message' value={message} onChange={e => setMessage(e.target.value)} className="textarea" />
                </div>

                <button type='submit' className="submit-button">Submit</button>
            </form>
        </div>
    )
}

