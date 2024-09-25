import React from "react";
import './techStack.css';

import html from '../images/vscode-icons_file-type-html.svg';
import css from '../images/vscode-icons_file-type-css.svg';
import js from '../images/vscode-icons_file-type-js-official.svg';
import ts from '../projectImg/typescript.png'
import react from '../images/logos_react.svg';
import java from '../projectImg/Java-Logo.jpg'
import git from '../images/logos_git-icon.svg';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs_logo.svg';
import express from '../projectImg/express-js.png';
import mongodb from '../images/mongodb.svg';
import fb from '../images/firebase.jpeg';
import Fade from 'react-awesome-reveal';
import redux from '../images/redux.png'


const TechStack = () => {
    return (
        <>
            <Fade bottom>
                <div id='techStack'>
                    <div>
                        <h1 className='centre bold'>My Tech Stack</h1>
                        <p className='centre'>
                            Technologies I've been working with recently
                        </p>
                        <div className='stackflex stackflex1'>
                            <span className='stackStyle'>
                                <img src={react} alt='HTML' className='stack' />
                                React Native
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={js}
                                    alt='JavaScript'
                                    className='stack'
                                />{' '}
                                JavaScript
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={ts}
                                    alt='JavaScript'
                                    className='stack'
                                />{' '}
                                TypeScript
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={nodejs}
                                    alt='Node JS'
                                    className='stack'
                                />{' '}
                                Node JS{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={express}
                                    alt='Express Js'
                                    className='stack'
                                />{' '}
                                Express JS{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={mongodb}
                                    alt='MongoDB'
                                    className='stack'
                                />{' '}
                                MongoDB{' '}
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={redux}
                                    alt='C'
                                    className='stack'
                                />{' '}
                                Redux ToolKit{' '}
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={fb}
                                    alt='C'
                                    className='stack'
                                />{' '}
                                Firebase{' '}
                            </span>
                            
                            <span className='stackStyle'>
                                <img src={html} alt='html' className='stack' />{' '}
                                HTML
                            </span>
                            <span className='stackStyle'>
                                <img src={css} alt='CSS' className='stack' />{' '}
                                CSS
                            </span>

                            <span className='stackStyle'>
                                <img
                                    src={react}
                                    alt='React JS'
                                    className='stack'
                                />{' '}
                                React{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={java}
                                    alt='java'
                                    className='stack'
                                />{' '}
                                java{' '}
                            </span>
                            <span className='stackStyle'>
                                <img
                                    src={mysql}
                                    alt='MySQL'
                                    className='stack'
                                />{' '}
                                MySQL
                            </span>

                            <span className='stackStyle'>
                                <img src={git} alt='Git' className='stack' />{' '}
                                Git{' '}
                            </span>
                        </div>
                    </div>
                </div>
            
            </Fade>

         
        </>
    );
};
export default TechStack;
