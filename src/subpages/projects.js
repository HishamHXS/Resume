import React, { useState } from 'react';
import '../styles/projects.css';
import '../styles/popup.css';


function Projects() {
    const [openPopup, setOpenPopup] = useState(null);

    const openPopupHandler = (popupId) => setOpenPopup(popupId);
    const closePopupHandler = () => setOpenPopup(null);

    return (
        <div className="grid">
            <div className="grid-item item1" onClick={() => openPopupHandler(1)} style={{ cursor: 'pointer' }}>            
              <h3> Flour & Fortune </h3>
            </div>
            
            <div className="grid-item item2" onClick={() => openPopupHandler(2)} style={{ cursor: 'pointer' }}>
              <h3> Katko Bakery </h3>
            </div>

            {openPopup === 1 && (
                <div className='popup'>
                    <div className='popup-content'>
                        <span className='close' onClick={closePopupHandler}>&times;</span>
                            <h2>Flour & Fortune Update soon! </h2>
                                <p> Flour & Fortune is a 2d sidescroller game that combines cards and cooking. This game is made in Godot using the rust extension. This project served as my inital delve into the world of game development alongside coordinating with multiple contracted workers. Below is a link to the documentation behind the game and a link to the github repository. </p>
                    </div>
                </div>
            )}

            {openPopup === 2 && (
                <div className='popup'>
                    <div className='popup-content'>
                        <span className='close' onClick={closePopupHandler}>&times;</span>
                            <h2> Katko Bakery Update soon!</h2>
                                <p> The Katko bakery is a passion project of a colleague and one day hopes to become a business. </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Projects;
