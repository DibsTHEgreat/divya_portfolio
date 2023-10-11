"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const sendMail = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({
              email,
              subject,
              message
            })
          });
          
        const responseData = await response.json();
        
        if (response.ok) {
            setSuccessMessage("Message successfully sent");
            setEmail('');
            setSubject('');
            setMessage('');
    
            setTimeout(() => {
                setSuccessMessage('');
            }, 10000);
        } else {
            setSuccessMessage("Failed to send message");
        }
        
        console.log(responseData);
    }
    

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div>
          <h5 className="text-xl font-bold text-black my-2">
            Reach Out To Me!
          </h5>
          <p className="text-black mb-4 max-w-md">
            {" "}
            I&apos;m always seeking new opportunities! Whether you have a question or just want to say hi, my inbox is always
            open.
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/DibsTHEgreat">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/divya-pateliya-2362b7234/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div className="z-10">
          <form className="flex flex-col" onSubmit={sendMail}>
            {successMessage && (
              <div className={successMessage === "Message successfully sent" ? "text-green-500" : "text-red-500"}>
                {successMessage}
              </div>
            )}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-black block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value)
                }}
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Hello"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gray-100 hover:bg-gray-300 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
    </section>
  );
};

export default EmailSection;