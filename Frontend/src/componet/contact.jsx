import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Contact() {

    
      

    const navigate = useNavigate();

    const handleClick = () => {
      // Perform any additional actions if necessary
      navigate('/'); // Navigate to the home page
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', data);
      if (response.status === 200) {
        toast.success('Message sent successfully!');
        navigate('/'); // Redirect to home page after successful submission
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address',
                }
              })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Your Email"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Your Message"
              rows="5"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        onClick={handleClick}
      >
        Send Message
      </button>
    </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

