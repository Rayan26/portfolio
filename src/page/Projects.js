import React from 'react';
import ButtonBottom from '../components/ButtonBottom';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigations from '../components/Navigations';
import Project from '../components/Project';

export const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project projectNumber={0} />
                <ButtonBottom left={'/'} right={'/project-2'} />
            </div>
        </main>
    )
}

export const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project projectNumber={1} />
                <ButtonBottom left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    )
}

export const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project projectNumber={2} />
                <ButtonBottom left={'/project-2'} right={'/project-4'} />
            </div>
        </main>
    )
}
export const Project4 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project projectNumber={3} />
                <ButtonBottom left={'/project-3'} right={'/contact'} />
            </div>
        </main>
    )
}