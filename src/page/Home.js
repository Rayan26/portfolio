import React from 'react';
import ButtonBottom from '../components/ButtonBottom';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import Navigations from '../components/Navigations';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from "framer-motion";

const Home = () => {
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            x: -100,
        }
    };
    return (
        <main>
            <Mouse />
            <motion.div className="home"
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}>
                <Navigations />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Rayan KALLAB</h1>
                        <h2><DynamicText></DynamicText></h2>
                    </div>
                </div>
                <ButtonBottom right={"/project-1"} ></ButtonBottom>
            </motion.div>
        </main>

    );
};

export default Home;