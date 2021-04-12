import React from "react";
import Navigation from "../components/Navigations";
import ButtonBottom from "../components/ButtonBottom";
import ContactForm from "../components/ContactForm";
import SocialNetwork from "../components/SocialNetwork";
import Logo from "../components/Logo";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Contact = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 300,
        },
    };

    const transition = {
        ease: [.03, .87, .73, .9],
        duration: .6,
    }

    return (
        <main>
            <Mouse />
            <motion.div
                className="contact"
                exit="out"
                animate="in"
                initial="out"
                variants={pageTransition}
                transition={transition}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>171 Avenue de Luminy</p>
                            <p>13009 Marseille</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0624625218" className="hover">
                                <p
                                    style={{ cursor: 'pointer' }}
                                    className="clipboard"
                                    onClick={() => {
                                        alert("Téléphone copié !");
                                    }}
                                >
                                    06 24 62 52 18
                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="kallabrayan@gmail.com" className="hover">
                                <p
                                    style={{ cursor: 'pointer' }}
                                    className="clipboard"
                                    onClick={() => {
                                        alert("Email copié !");
                                    }}
                                >
                                    kallabrayan@gmail.com
                </p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credits">
                        <p>Rayan K.D - 2020</p>
                    </div>
                </div>
                <ButtonBottom left={"/project-4"} />
            </motion.div>
        </main>
    );
};

export default Contact;