import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as Io5Icons from "react-icons/io5";
import * as HiIcons from "react-icons/hi";

const SocialMedia = () => {
    return (
        <div className="wrapper-social-media">
            <ul className="nav flex-column">
                <li>
                    <a href="#">
                        <FaIcons.FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaIcons.FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaIcons.FaYoutube />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia
