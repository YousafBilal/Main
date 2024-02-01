import React, { useState } from 'react';

const Emailchanging = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to update the email and phone number in the database
    console.log('Email:', email);
    console.log('Phone:', phone);
    // You can make API calls here to update the database with the new email and phone number
  };

  return (
    <div className="max-w-lg mx-auto mt-20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-[22px]  font-medium text-[#A3AED0]"  style={{fontFamily: "'Iceland', sans-serif"}}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            required
            value={email}
            onChange={handleEmailChange}
            className="mt-1 p-1.5 block w-full rounded-md focus:outline-none sm:text-sm"
            style={{fontFamily: "'Iceland', sans-serif"}}
          />
        </div>
        <div>
          <label htmlFor="phone" className=" text-[22px]  font-medium text-[#A3AED0]"  style={{fontFamily: "'Iceland', sans-serif"}}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            autoComplete="tel"
            required
            value={phone}
            onChange={handlePhoneChange}
            className="mt-1 p-1.5 block w-full rounded-md focus:outline-none sm:text-sm"
            style={{fontFamily: "'Iceland', sans-serif"}}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-[22px] font-medium text-white bg-[#EC6105] hover:bg-[#EC6105] "
            style={{fontFamily: "'Iceland', sans-serif"}}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Emailchanging;
