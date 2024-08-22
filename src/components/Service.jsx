import React from "react";
import { motion } from "framer-motion";

// Services data
const services = [
  { id: 1, title: "Web Design", description: "Creating visually appealing and user-friendly web designs." },
  { id: 2, title: "Frontend Development", description: "Building responsive and interactive user interfaces." },
  { id: 3, title: "Backend Development", description: "Developing robust server-side logic and databases." },
  { id: 4, title: "Full-Stack Development", description: "Combining both frontend and backend development skills." },
  { id: 5, title: "Content Writing", description: "Writing content for your business and companies." },
  { id: 6, title: "Digital Marketing", description: "Promote your business with our digital marketing team." },
];

// Function to generate random properties for bubbles
const generateRandomBubble = () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 2,
  duration: Math.random() * 10 + 5,
  delay: Math.random() * 2,
});

const generateRandomParticle = () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 0.7 + 0.3,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 4,
});

const bubbles = Array.from({ length: 50 }, generateRandomBubble);
const particles = Array.from({ length: 60 }, generateRandomParticle);

const Service = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#000",
        color: "#fff",
        paddingTop: "80px",
        paddingBottom: "80px",
        boxSizing: "border-box",
        width: "100vw",
        margin: 0,
      }}
      id="service"
    >
      {/* Full-screen animated gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        {/* Rotating Gradient */}
        <motion.div
          style={{
            position: "absolute",
            width: "750px",
            height: "750px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            backgroundImage: "linear-gradient(hsl(222, 84%, 60%), hsl(164, 79%, 71%))",
            filter: "blur(120px)", // Slightly reduced blur for performance
            willChange: "transform",
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        />

        {/* Pulsating Circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              borderRadius: "50%",
              backgroundColor: `hsla(${200 + i * 30}, 100%, 50%, 0.1)`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              willChange: "transform, opacity",
            }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 8 + i * 2, ease: "easeInOut" }}
          />
        ))}

        {/* Bubbles Animation */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${bubble.size}vw`,
              height: `${bubble.size}vw`,
              top: `${bubble.y}%`,
              left: `${bubble.x}%`,
              backgroundColor: "hsla(183, 94%, 76%, 0.4)",
              borderRadius: "50%",
              filter: "blur(12px)", // Slightly reduced blur for performance
              willChange: "transform, opacity",
            }}
            animate={{
              y: ["100vh", "-100vh"],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: bubble.duration,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
          />
        ))}

        {/* Particles Animation */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: `${particle.size}vw`,
              height: `${particle.size}vw`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              backgroundColor: "hsla(0, 0%, 100%, 0.7)",
              borderRadius: "50%",
              willChange: "transform, opacity",
            }}
            animate={{
              y: ["100vh", "-100vh"],
              x: ["0%", "100%", "0%"],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content on top of the background */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          margin: "0 auto",
          padding: "0 1.5rem",
          maxWidth: "1200px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          My Services
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: "#2d3748",
                padding: "1.5rem",
                borderRadius: "0.75rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 255, 255, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  textAlign: "right",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #38b2ac, #4299e1)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textFillColor: "transparent",
                }}
              >
                {service.id}
              </div>
              <h3
                style={{
                  marginTop: "0.5rem",
                  fontSize: "1.75rem",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #68d391, #4299e1)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textFillColor: "transparent",
                }}
              >
                {service.title}
              </h3>
              <p style={{ marginTop: "0.5rem", color: "#e2e8f0" }}>{service.description}</p>
              <a
                href="#"
                style={{
                  marginTop: "1rem",
                  display: "inline-block",
                  color: "#68d391",
                  transition: "color 0.3s ease",
                }}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
