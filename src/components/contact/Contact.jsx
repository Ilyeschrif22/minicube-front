import './styles.css';

const Contact = () => {
    return (
        <div className='contact-section'>

            <div className='contact-title'>Contact</div>

            <div className='contact-form'>
                <label className="contact-label" htmlFor="name">
                    First and last name *
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter first and last name"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="name">
                    Email *
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Email"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="name">
                    Phone number *
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Phone number"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="name">
                    Subject *
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Subject"
                    className="contact-input"
                    required
                />

                <label className="contact-label" htmlFor="description">
                    Message *
                </label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter Message ..."
                    rows="4"
                    className="contact-textarea"
                    required
                    maxLength={1000}
                />

                <div className='contact-buttons-container'>
                    <div className='contact-cancel-button'>
                        Cancel
                    </div>

                    <div className='contact-send-button'>
                        Send Message
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact