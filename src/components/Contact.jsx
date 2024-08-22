import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }} id="contact">
      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes moveStars {
            from { transform: translateX(0); }
            to { transform: translateX(-2000px); }
          }

          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 4000px;
            height: 100%;
            background: transparent;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
            animation: moveStars 100s linear infinite;
          }

          .star {
            width: 2px;
            height: 2px;
            background: white;
            position: absolute;
            opacity: 0.8;
            animation: moveStars 100s linear infinite;
          }

          @media (max-width: 768px) {
            .contact-container {
              flex-direction: column;
              align-items: center;
            }

            .contact-item, .contact-form {
              width: 100%;
            }
          }
        `}
      </style>

      <div className="stars">
        {Array.from({ length: 500 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${50 + Math.random() * 50}s`,
              animationDelay: `${Math.random() * 100}s`,
            }}
          />
        ))}
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,  // Ensure content stays above the stars
        position: 'relative',
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '48px',
        }}>Contact Me</h2>
        <div className="contact-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '48px',
          width: '100%',
        }}>
          <div className="contact-item" style={{
            textAlign: 'left',
            flex: 1,
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #32cd32, #1e90ff)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              marginBottom: '16px'
            }}>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div style={{ margin: '32px 0' }}>
              <FaEnvelope style={{ color: '#32cd32', marginRight: '8px' }} />
              <a href="mailto:youremail@example.com" style={{ color: 'white', textDecoration: 'underline' }}>
                youremail@example.com
              </a>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <FaPhone style={{ color: '#32cd32', marginRight: '8px' }} />
              <span>+9828839922</span>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <FaMapMarkedAlt style={{ color: '#32cd32', marginRight: '8px' }} />
              <span>Street, City, Province, Country</span>
            </div>
          </div>
          <div className="contact-form" style={{ flex: 1 }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>Your Name</label>
                <input
                  type="text"
                  id="name"
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    border: '1px solid #444',
                    outline: 'none',
                    color: 'white'
                  }}
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    border: '1px solid #444',
                    outline: 'none',
                    color: 'white'
                  }}
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '8px' }}>Message</label>
                <textarea
                  id="message"
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    backgroundColor: '#333',
                    border: '1px solid #444',
                    outline: 'none',
                    color: 'white',
                    height: '90px'
                  }}
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(to right, #32cd32, #1e90ff)',
                  color: 'white',
                  padding: '8px 32px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  transform: 'scale(1)',
                  transition: 'transform 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
