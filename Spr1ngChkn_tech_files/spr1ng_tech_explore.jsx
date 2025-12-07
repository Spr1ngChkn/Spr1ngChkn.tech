import React, { useState } from "react";

const Explore = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState("videoGamesQuestion");
  // New state to store the user's responses
  const [userResponses, setUserResponses] = useState([]);
  const [formName, setFormName] = useState("");
  const [formGoal, setFormGoal] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // The Instagram Reel embed URL
  const instagramEmbedUrl = "https://www.instagram.com/p/C6p3Fp4uyhU/embed/";

  // Temporary placeholder URL for the final "false" branch
  const externalPlaceholderUrl = "https://www.example.com/other-resources";

  const handleVideoGamesYes = () => {
    const newResponses = [...userResponses, "Video Games: True"];
    setUserResponses(newResponses);
    console.log("Current User Responses:", newResponses);
    setCurrentStep("showInstagramEmbed");
  };

  const handleVideoGamesNo = () => {
    const newResponses = [...userResponses, "Video Games: False"];
    setUserResponses(newResponses);
    console.log("Current User Responses:", newResponses);
    setCurrentStep("techQuestion");
  };

  const handleTechYes = () => {
    const newResponses = [...userResponses, "Tech: True"];
    setUserResponses(newResponses);
    console.log("Current User Responses:", newResponses);
    setFormSubmitted(false); // Reset form submission status
    setCurrentStep("contactForm");
  };

  const handleTechNo = () => {
    const newResponses = [...userResponses, "Tech: False"];
    setUserResponses(newResponses);
    console.log("Current User Responses:", newResponses);
    setCurrentStep("codeProblemQuestion");
  };

  const handleCodeProblemYes = () => {
    const newResponses = [...userResponses, "Code Problem: True"];
    setUserResponses(newResponses);
    console.log("Current User Responses:", newResponses);
    setFormSubmitted(false); // Reset form submission status
    setCurrentStep("contactForm");
  };

  const handleCodeProblemNo = () => {
    const newResponses = [...userResponses, "Code Problem: False"];
    setUserResponses(newResponses);
    console.log("Current User Responses:", newResponses);
    setCurrentStep("externalLink");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form Submitted:", { name: formName, goal: formGoal, contact: formContact });
    setFormSubmitted(true);
    // Optionally, clear form fields after submission
    setFormName("");
    setFormGoal("");
    setFormContact("");
  };

  // Determine the form title based on the previous step
  const getFormTitle = () => {
    const lastResponse = userResponses[userResponses.length - 1];
    if (lastResponse && lastResponse.includes("Tech: True")) {
      return "How Can We Help?";
    } else if (lastResponse && lastResponse.includes("Code Problem: True")) {
      return "Having Problems With Your Code?";
    }
    return "Submit Your Info"; // Default title if path isn't clear
  };

  return (
    <div className="explore-overlay">
      <div className="explore-content">
        <button className="close-button" onClick={onClose}>X</button>

        {currentStep === "videoGamesQuestion" && (
          <div>
            <p>Like gaming?</p>
            <button onClick={handleVideoGamesYes}>True</button>
            <button onClick={handleVideoGamesNo}>False</button>
          </div>
        )}

        {currentStep === "showInstagramEmbed" && (
          <div>
            <p>Peep these Clips</p>
            <div className="instagram-embed-container">
              <iframe
                src={instagramEmbedUrl}
                allowTransparency="true"
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true"
              ></iframe>
            </div>
            <button onClick={onClose}>Close</button>
          </div>
        )}

        {currentStep === "techQuestion" && (
          <div>
            <p>Do you need a technician?</p>
            <button onClick={handleTechYes}>True</button>
            <button onClick={handleTechNo}>False</button>
          </div>
        )}

        {currentStep === "codeProblemQuestion" && (
          <div>
            <p>Having problems with your code?</p>
            <button onClick={handleCodeProblemYes}>True</button>
            <button onClick={handleCodeProblemNo}>False</button>
          </div>
        )}

        {currentStep === "contactForm" && (
          <div>
            <h2>{getFormTitle()}</h2>
            {formSubmitted ? (
              <p>Thank you for your submission! We'll be in touch.</p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                  <input
                    id="name"
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                    style={{
                      width: 'calc(100% - 20px)', padding: '8px', borderRadius: '5px', border: '1px solid var(--text-golden)',
                      backgroundColor: 'var(--primary-purple)', color: 'var(--text-golden)'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <label htmlFor="goal" style={{ display: 'block', marginBottom: '5px' }}>Goal:</label>
                  <textarea
                    id="goal"
                    value={formGoal}
                    onChange={(e) => setFormGoal(e.target.value)}
                    required
                    style={{
                      width: 'calc(100% - 20px)', padding: '8px', borderRadius: '5px', border: '1px solid var(--text-golden)',
                      backgroundColor: 'var(--primary-purple)', color: 'var(--text-golden)', minHeight: '80px'
                    }}
                  ></textarea>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px' }}>Contact:</label>
                  <input
                    id="contact"
                    type="email"
                    value={formContact}
                    onChange={(e) => setFormContact(e.target.value)}
                    required
                    style={{
                      width: 'calc(100% - 20px)', padding: '8px', borderRadius: '5px', border: '1px solid var(--text-golden)',
                      backgroundColor: 'var(--primary-purple)', color: 'var(--text-golden)'
                    }}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            )}
            <button onClick={onClose} style={{ marginTop: '15px' }}>Close</button>
          </div>
        )}

        {currentStep === "externalLink" && (
          <div>
            <p>No worries, here are some other resources!</p>
            <a href={externalPlaceholderUrl} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--accent-turquoise)', textDecoration: 'underline', cursor: 'pointer'
            }}>Click Here</a>
            <button onClick={onClose} style={{ marginTop: '15px' }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;