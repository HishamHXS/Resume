import React, { useState } from "react";
import "../styles/projects.css";
import "../styles/popup.css";

function Projects() {
  const [openPopup, setOpenPopup] = useState(null);

  const openPopupHandler = (popupId) => setOpenPopup(popupId);
  const closePopupHandler = () => setOpenPopup(null);

  return (
    <div className="about">
      <ul className="article-list">
        <li>
          <div className="anti-linked-lists">
            <h4
              onClick={() => openPopupHandler(1)}
              style={{ cursor: "pointer" }}
            >
              Aki
            </h4>
          </div>
        </li>
      </ul>

      {openPopup === 1 && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopupHandler}>
              &times;
            </span>
            <h1>Aki The Idea Pooling Platform</h1>

            <h3>Premise</h3>
            <p>
              In our current age, it feels as if many Gen Z individuals are
              addicted to apps like TikTok and Instagram Reels. I can relate
              firsthand, having struggled with a YouTube addiction—there were
              days when I spent up to 12 hours on YouTube alone. Despite the
              "brainrot" content, YouTube's informational content is
              unparalleled. However, this negativity often overshadows the
              potential benefits of obsession when directed correctly. Many
              successful people, like LeBron James, exhibit obsessive dedication
              to their craft. This realization struck me while playing League of
              Legends. I've always enjoyed world-building in media like Game of
              Thrones and Overwatch, so I challenged myself to create a
              fictional story. While researching, I noticed how intimidating it
              can be to start a new skill—especially something as personal as
              writing. Having an external perspective can be incredibly
              valuable. This led me to create Aki, an idea pooling platform. The
              goal is to provide an anonymous space where people can share ideas
              and receive feedback. Aki also features a "capsule" mode, where
              users are placed in a lobby to present their ideas, similar to an
              X-Factor-style pitch.
            </p>
            <h3> Implementation </h3>

            <p>
              {" "}
              This project is still being developed. You can find more about the
              project here:
              <a
                href="https://github.com/HishamHXS/Aki"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/HishamHXS/Aki
              </a>
            </p>
          </div>
        </div>
      )}
      <br></br>
    </div>
  );
}

export default Projects;
