import React from 'react'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitterSquare,  FaYoutube } from 'react-icons/fa'

import { AiFillInstagram, AiFillMail } from 'react-icons/ai'


export const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center">
        <div className="flex gap-6 justify-center items-center">
          <Link
            to="/"
            className="text-white hover:text-blue-400 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="text-white hover:text-blue-400 hover:underline"
          >
            Jobs
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 hover:underline"
          >
            Contact
          </Link>
        </div>

        <div>
        

         
        </div>

        <div className="flex flex-col pt-3 justify-center items-center">
        
        <div className="flex flex-col justify-center items-center pt-5">
            <p className="titleT text-2xl flex justify-center items-center">
              {" "}
              <MdOutlineBusinessCenter /> JOBJunction
            </p>
            <p className="text-sm text-gray-300">
            Connecting You to Your Next Career
            </p>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
}
