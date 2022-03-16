import { useState } from "react";
import { useRef } from "react";

function Chapter8() {
  const [feedbacks, setFeedbacks] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    const reqBody = { email: enteredEmail, text: enteredFeedback };
    fetch("/api/chapter8/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleLoadFeedback = () => {
    fetch("/api/chapter8/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbacks(data.feedback));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>The Home Page</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            className="border border-gray-600"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            ref={feedbackInputRef}
            name="feedback"
            id="feedback"
            cols="30"
            rows="5"
            className="border border-gray-600"
          ></textarea>
        </div>
        <button className="border border-gray-400">Submit</button>
      </form>
      <hr />
      <button onClick={handleLoadFeedback} className="border border-gray-400">
        Load Feedback
      </button>
      <ul>
        {feedbacks.map((f) => (
          <li key={f.id}>{f.text}</li>
        ))}
      </ul>
    </>
  );
}
export default Chapter8;
