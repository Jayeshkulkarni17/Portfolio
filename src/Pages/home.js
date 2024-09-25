import React from "react";
import Navbar from '../Components/Navbar';
import './home.css';
import Typewriter from 'typewriter-effect';
import J_K from '../images/J_K.jpg'

const Home = () => {
    return (
        <>
            <Navbar />

            <div id='home'>
                <div className='pc'>
                    <h1 className='heading'>Jayesh Kulkarni</h1>
                    <h2 className='flex role'>
                        <span className="typewriter-container">
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('FullStack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                    <br />
                    <a className="btn shine" href="/src/Components/Resume/Jayesh_Kulkarni.pdf" download style={{ textDecoration: 'none' ,}}>&nbsp;&nbsp;Download Resume</a>
                </div>

                <div className='mobile'>
                    <h1 className='heading'>Jayesh Kulkarni</h1>
                    <h2 className='flex role'>
                        <span className="typewriter-container">
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                    
                </div>

                <div className='profile-img'>
                    <img src={J_K} alt='JK' />
                </div>
                <div className="mobile">
                    <br />
                <a className="btn shine" href="/src/Components/Resume/Jayesh_Kulkarni.pdf" download style={{ textDecoration: 'none' }}>Download Resume</a>

                </div>
            </div>
            <hr />
        </>
    );
};

export default Home;
