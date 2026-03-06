import React from 'react'

const ContactForm = () => {
  return (
<div className="contact-form">
    <div className="formflex">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
    </div>
    <div className="formflex">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
    </div>
    <div className="formflex">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
    </div>
<br />
    <div className="formflex">
        <button type="submit" className="submit-button">Send Your Message</button>
    </div>
</div>
  )
}

export default ContactForm