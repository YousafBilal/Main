import React, { useState } from 'react';

const EmailPhoneVerification = () => {
  const [emailVerificationCode, setEmailVerificationCode] = useState('');
  const [phoneVerificationCode, setPhoneVerificationCode] = useState('');

  const handleEmailVerificationCodeChange = (e) => {
    setEmailVerificationCode(e.target.value);
  };

  const handlePhoneVerificationCodeChange = (e) => {
    setPhoneVerificationCode(e.target.value);
  };

  const handleEmailVerificationSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to verify the email verification code
    console.log('Email Verification Code:', emailVerificationCode);
    // You can make API calls here to verify the email verification code
  };

  const handlePhoneVerificationSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to verify the phone verification code
    console.log('Phone Verification Code:', phoneVerificationCode);
    // You can make API calls here to verify the phone verification code
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
        <form onSubmit={handleEmailVerificationSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="emailVerificationCode" className="block text-gray-700 text-sm font-bold mb-2">
              Enter Verification Code
            </label>
            <input
              type="text"
              id="emailVerificationCode"
              value={emailVerificationCode}
              onChange={handleEmailVerificationCodeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Verify Email
          </button>
        </form>

        <h2 className="text-2xl font-bold mb-4">Phone Verification</h2>
        <form onSubmit={handlePhoneVerificationSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="phoneVerificationCode" className="block text-gray-700 text-sm font-bold mb-2">
              Enter Verification Code
            </label>
            <input
              type="text"
              id="phoneVerificationCode"
              value={phoneVerificationCode}
              onChange={handlePhoneVerificationCodeChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Verify Phone
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailPhoneVerification;
