import { useState, type FormEvent } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setStatus(
      'Form submitted successfully in the browser. Message delivery is not connected yet.'
    )
  }

  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">
        <p className="eyebrow">04 / GET IN TOUCH</p>
        <h2>
          Let's start a
          <span> conversation.</span>
        </h2>
        <p>
          Have an opportunity or an interesting idea?
          Feel free to send me a message.
        </p>
      </div>

      <div className="contact-layout">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h3>Let's connect.</h3>

          <p>
            I'm interested in software development opportunities,
            collaborations and meaningful technical discussions.
          </p>

          <div className="contact-detail">
            <span>EMAIL</span>
            <a href="mailto:yadavshobhit84@gmail.com">
              yadavshobhit84@gmail.com
            </a>
          </div>
<div className="contact-detail">
  <span>GITHUB</span>

  <a
    href="https://github.com/Shobitkumar1717"
    target="_blank"
    rel="noopener noreferrer"
  >
    Visit GitHub ↗
  </a>
</div>

          <div className="contact-detail">
            <span>LINKEDIN</span>
            <a
              href="https://www.linkedin.com/in/shobitkumar/"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn ↗
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  name: event.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  email: event.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="What is this regarding?"
              value={formData.subject}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  subject: event.target.value,
                })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={5}
              value={formData.message}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  message: event.target.value,
                })
              }
              required
            />
          </div>

          <button type="submit" className="button button-primary">
            Send Message ↗
          </button>

          <p className="form-status" role="status">
            {status}
          </p>

        </form>

      </div>

    </section>
  )
}

export default Contact