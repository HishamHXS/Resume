import React from 'react';
import '../styles/interests.css';

import duneCover from '../assets/dune-1.jpg';
import sixCrows from '../assets/a-six-of-crows.jpeg';
import fourthWing from '../assets/fourth-wing.jpeg';
import nightCircus from '../assets/night-circus.jpeg';
import got1 from '../assets/game-of-thrones.jpg';
import epictetus from '../assets/epictetus-discourses.jpg';
import redrising from '../assets/red-rising.jpeg';
import doriangray from '../assets/picture-of-dorian-gray.jpg';

import aot from '../assets/attack-on-titan.jpeg'; 
import jjk from '../assets/jujutsu-kaisen.jpeg';   
import johnWick from '../assets/john-wick.jpeg';
import howlsmovingcastle from '../assets/howls-moving-castle.jpeg';
import slamdunk from '../assets/slam-dunk.jpeg';
import coachcarter from '../assets/coach-carter.jpeg';

function Interests() {
    const bookCovers = [
        duneCover,
        sixCrows,
        fourthWing,
        nightCircus,
        got1,
        epictetus,
        redrising,
        doriangray
    ];

    const showCovers = [
        jjk,
        aot,
        johnWick,
        howlsmovingcastle,
        slamdunk,
        coachcarter
    ];

    return (
        <div className="interests">
            <p> Some of my favourite books: </p>
            
            <div className="book-grid">
                {bookCovers.map((cover, index) => (
                    <img key={index} src={cover} alt={`Book Cover ${index + 1}`} />
                ))}
            </div>

            <p> Some of my favourite movies and shows: </p>
            
            <div className="shows-grid">
                {showCovers.map((cover, index) => (
                    <img key={index} src={cover} alt={`Book Cover ${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Interests;