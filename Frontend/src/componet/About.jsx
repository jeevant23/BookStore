import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function About() {
  return (
    <div className="about-page-container">
      <h1 className="text-4xl font-bold text-blue-500 text-center mt-10">About Us</h1>
      <p className="text-lg text-center mt-6 mx-auto max-w-2xl">
        Welcome to our bookstore! We are passionate about books and aim to provide a wide selection 
        for readers of all ages. Our mission is to cultivate a love of reading by offering an extensive 
        collection of books, ranging from timeless classics to modern bestsellers.
      </p>
      <div className="mt-10">
        <h2 className="text-2xl text-blue-500 font-semibold text-center">Our Story</h2>
        <p className="text-lg mt-4 mx-auto max-w-2xl">
          Founded in 2020, our bookstore was born out of a passion for literature and a desire to bring 
          a vibrant reading culture to our community. What started as a small local shop has grown into 
          
        </p>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl text-blue-500 font-semibold text-center">Our Values</h2>
        <ul className="list-disc list-inside mx-auto max-w-2xl mt-4">
          <li>Customer satisfaction is our top priority.</li>
          <li>We believe in supporting local authors and publishers.</li>
          <li>We strive to create a welcoming environment for all.</li>
          <li>We are committed to promoting literacy and education.</li>
        </ul>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl text-blue-500 font-semibold">Contact Us</h2>
        <p className="text-lg mt-4">
          Have questions or need recommendations? Feel free to reach out to us!
        </p>
        <p className=" text-blue-500 text-lg mt-2">
          Email: <a href="mailto:info@bookstore.com" className="text-blue-600 underline">info@bookstore.com</a>
        </p>
        <p className=" text-blue-500 text-lg mt-2">
          Phone: <a href="tel:+123456789" className="text-blue-600 underline">+1 (234) 567-89</a>
        </p>
      </div>
      
      {/* Back to Home Button */}
      <div className="mt-10 text-center">
        <Link to="/">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
