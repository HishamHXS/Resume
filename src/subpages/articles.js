import React, { useState } from "react";
import "../styles/articles.css";
import "../styles/popup.css";

const Articles = () => {
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
              Interview preparation.
            </h4>
          </div>
        </li>
        <li>
          <div className="scipio-africanus">
            <h4
              onClick={() => openPopupHandler(2)}
              style={{ cursor: "pointer" }}
            >
              Chasing two rabbits.
            </h4>
          </div>
        </li>
        <li>
          <div className="epictetus-discourses">
            <h4
              onClick={() => openPopupHandler(3)}
              style={{ cursor: "pointer" }}
            >
              Discourses review.
            </h4>
          </div>
        </li>
        <br></br>
      </ul>

      {openPopup === 1 && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopupHandler}>
              &times;
            </span>
            <h1>Interview preparation</h1>
            <p>
              Preparing for technical interviews can feel overwhelming,
              especially when the questions often seem disconnected from
              day-to-day software development tasks. The focus on data
              structures and algorithmic puzzles can appear unfair at times, but
              mastering them is essential for breaking into the software
              development field. Personally, I view interviewing as a separate
              skill—one that can be improved through practice and guidance. In
              this brief article, I’ll share some of my thoughts and experiences
              in handling technical interviews.
            </p>

            <h2>The Practice</h2>
            <p>
              For me, Python's simplicity and the vast number of resources
              available made it my language of choice during interview
              preparation. The platforms I found most useful were{" "}
              <em>Algorithms design manual</em>, Leetcode, GeeksforGeeks,
              Neetcode 150, and Striver DSA. One key takeaway is that Leetcode’s
              problem-solving approach doesn’t follow a linear path, and it’s
              completely okay to "cheat"—meaning it’s fine to look up solutions
              to learn patterns before mastering them.
            </p>

            <h3>Mock Interviews</h3>
            <p>
              Mock interviews were instrumental in boosting my confidence. Not
              everyone has a colleague for these, though, so online platforms
              like Pramp can serve as a great alternative for simulating the
              interview experience.
            </p>

            <h2>The Interview</h2>
            <p>
              For every interview, I tried to stick to a structured process:
            </p>

            <h3>Clarifying Questions</h3>
            <p>
              Asking questions is crucial to clarify the problem. Some good
              questions to ask include:
            </p>
            <ul>
              <li>What is the expected input and output format?</li>
              <li>Is 0 a potential edge case?</li>
              <li>
                State assumptions such as "Can I assume the graph will have no
                loops."
              </li>
              <li>Are duplicates possible in the input?</li>
              <li>
                Are there any boundary conditions? (A small upper bound could
                mean a higher complexity solution)
              </li>
              <li>Is the input obfuscated?</li>
            </ul>

            <h3>Listing Solutions (Time and Space Complexity)</h3>
            <p>
              At this point, the interviewer will likely want to see your
              thought process. It’s often best to start with the brute force
              solution and progressively refine it to the optimal one. Analyze
              the time and space complexity for each approach, and don't
              hesitate to ask if certain factors, like the recursive stack,
              count towards space complexity.
            </p>

            <h3>Converting to Code</h3>
            <p>
              Once you’ve settled on a solution, it’s time to code. Remember to
              use helper methods and clearly define their signatures with
              well-structured inputs and outputs.
            </p>

            <h3>Dry Run</h3>
            <p>
              Given the stressful nature of interviews, it’s easy to make small
              mistakes under pressure. Doing a dry run of your code can help
              debug and refine your solution. Use test cases and focus on edge
              cases or tricky "pathological" examples. It can also help to
              document your thought process with inline comments.
            </p>

            <h3>Asking Questions</h3>
            <p>
              In my view, the question-asking phase at the end of the interview
              is often underutilized. Avoid generic questions like, “What do you
              like most about working at company X?” Instead, ask insightful
              questions like, “I’ve read that company X prefers an individual
              decision-making workflow, while company Y uses design documents.
              What are your thoughts on this?” You can also mention recent
              company events to gauge the interviewer’s perspective, such as,
              “Company X recently had significant layoffs—what’s your take on
              the company’s trajectory?”
            </p>
          </div>
        </div>
      )}

      {openPopup === 2 && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopupHandler}>
              &times;
            </span>
            <h2>Chasing two rabbits.</h2>
            <p>
              {" "}
              Reading the quote "A man who chases two rabbits catches neither"
              made me reflect on the idea of balance in life, especially when
              pursuing multiple goals. As an ambitious young adult, I often find
              myself trying to excel in different fields simultaneously, aiming
              to be the best at everything I do. However, this often leads to
              none of my efforts working out as I expected. For instance, during
              my interview preparation, I deprioritized exercising and focused
              solely on studying, which caused me to lose months of progress at
              the gym.
            </p>

            <p>
              {" "}
              This also brings up the idea of finding fulfillment in the
              present. From my personal experience, every goal I’ve achieved
              felt like reaching the peak of a mountain, only to find an even
              taller one ahead of me. Finding balance seems like an eternal
              struggle, and I’m eager to explore the philosophy behind it more
              deeply.
            </p>
          </div>
        </div>
      )}

      {openPopup === 3 && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopupHandler}>
              &times;
            </span>
            <h2>Epictetus Discourses.</h2>
            <p>
              The Dichotomy of Control in Epictetus' Discourses teaches that we
              must distinguish between actions that are within our control and
              those that are not. As he puts it: "Distinguish between your own
              and not your own, the things which are in your power and not in
              your power." At first glance, this might seem like a justification
              for complacency or victimization, through the belief that one is
              merely unlucky or that the world is against them. However, my own
              experience has shown that removing chaotic activities (like
              multiplayer video games and doom-scrolling) has led to a greater
              sense of purpose and control over my life.
            </p>

            <p>
              Accepting reality can indeed feel both demotivating and motivating
              at the same time. For example, when it comes to insecurities,
              acceptance might initially seem like giving in to them, but it
              also provides the freedom to stop resisting what you can't change,
              allowing you to focus your energy on what you can. This duality of
              acceptance transforms how we approach personal challenges. As I
              continue reading I will hopefully share more of my thoughts.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
