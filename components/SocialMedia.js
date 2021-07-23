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
                    <a href="https://www.facebook.com/FacultadCienciasBiologicasUNMSM/" target="_blank">
                        <FaIcons.FaFacebookF />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/biounmsm" target="_blank">
                        <FaIcons.FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCXVV5vV4Bsc9BOWO3V47uwQ" target="_blank">
                        <FaIcons.FaYoutube />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia
