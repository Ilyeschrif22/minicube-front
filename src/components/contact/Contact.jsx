import './styles.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const initEmailJS = () => {
        if (!window.emailJSInitialized) {
            emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
            window.emailJSInitialized = true;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            initEmailJS();

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    to_email: 'ilyes.chrif@esprit.tn',
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    phone: formData.phone,
                    reply_to: formData.email
                }
            );

            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='contact-section'>

            <div className='contact-title'>Contact</div>

            <form className='contact-form' onSubmit={handleSubmit}>
                <label className="contact-label" htmlFor="name">
                    First and last name *
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter first and last name"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="email">
                    Email *
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Email"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="phone">
                    Phone number *
                </label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Phone number"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="subject">
                    Subject *
                </label>
                <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter Subject"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="message">
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Message ..."
                    rows="4"
                    className="contact-textarea"
                    required
                    maxLength={1000}
                />

                <div className='contact-buttons-container'>
                    <button
                        type="button"
                        className='contact-cancel-button btn-swipe btn-swipe-dark'
                        onClick={handleCancel}
                        disabled={isLoading}
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className='contact-send-button btn-swipe btn-swipe-dark'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default Contact
