import React from 'react';
import MyPDF from '../data/CV.pdf';

const SocialNetwork = () => {


    const anim = () => {
        let navLinks = document.querySelectorAll('.social-network a');

        navLinks.forEach(link => {
            link.addEventListener('mouseover', (e) => {
                let attrX = e.offsetX - 20;
                let attrY = e.offsetY - 20;

                link.style.transform = `translate(${attrX}px, ${attrY}px)`;

            })
            link.addEventListener('mouseleave', (e) => {
                link.style.transform = '';
            })

        })
    }


    return (
        <div className="social-network">
            <ul className="content">
                <a href={MyPDF} download="CV_Rayan_Kallab.pdf" target="_blank"
                    rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fas fa-archive"></i></li>
                </a>
                <a href="https://www.facebook.com" target="_blank"
                    rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-facebook-f"></i></li>
                </a>
                <a href="https://www.linkedin.com" target="_blank"
                    rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-linkedin"></i></li>
                </a>
                <a href="https://www.facebook.com" target="_blank"
                    rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-instagram"></i></li>
                </a>
                <a href="https://github.com/Rayan26" target="_blank"
                    rel="noopener noreferrer" className="hover" onMouseOver={anim}>
                    <li><i className="fab fa-github"></i></li>
                </a>
            </ul>

        </div>
    );
};

export default SocialNetwork;