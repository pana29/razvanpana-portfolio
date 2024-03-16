import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainerAll from '../../components/ParticlesContainerAll';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setAlert({
          show: true,
          type: 'success',
          message: 'Email sent successfully!',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setAlert({
          show: true,
          type: 'error',
          message: 'Failed to send email.',
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setAlert({ show: true, type: 'error', message: 'Error sending email.' });
    }
  };

  return (
    <div className="h-full bg-alt/60 relative">
      <ParticlesContainerAll className="absolute z-[-1] w-full h-full top-0 left-0" />

      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:h2 text-2xl text-center mb-10  xl:mt-8 "
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {alert.show && (
            <div
              className={`max-w-[400px] mx-auto p-2 mb-4 text-white text-center rounded ${
                alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {alert.message}
              <button
                onClick={() => setAlert({ ...alert, show: false })}
                className={`ml-4 py-1 px-3 rounded ${
                  alert.type === 'success' ? 'bg-green-700' : 'bg-red-700'
                } text-white`}
              >
                OK
              </button>
            </div>
          )}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-2 lg:gap-6 lg:w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="input lowercase"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="text"
                placeholder="email"
                className="input lowercase"
                name="email"
                onChange={handleChange}
                value={formData.email}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
                title="Please enter a valid email address."
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="input"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
              required
            />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center 
            justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 
              transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
