import { useState, useEffect, useRef } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHeighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";
import horseRunningWebp from './assets/horse-running.webp';

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState("");
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const placeholderCycle = useRef([
    "Ask To Code Reviwer ...",
    "WEB-DEVELOPMENT",
    "DSA-DATA STRUCTURES & ALGORITHMS",
    "Made by Anubhav Shukla",
  ]);
  const cycleIndex = useRef(0);
  const wordIndex = useRef(0);
  const placeholderInterval = useRef(null);

  useEffect(() => {
    prism.highlightAll();

    startPlaceholderAnimation();

    return () => clearInterval(placeholderInterval.current);
  }, []);

  useEffect(() => {
    if (code) {
      clearInterval(placeholderInterval.current);
      setPlaceholderText("");
    } else {
      startPlaceholderAnimation();
    }
  }, [code]);

  const startPlaceholderAnimation = () => {
    cycleIndex.current = 0;
    wordIndex.current = 0;
    setPlaceholderText("");
    clearInterval(placeholderInterval.current);

    placeholderInterval.current = setInterval(() => {
      const currentPhrase = placeholderCycle.current[cycleIndex.current];
      if (wordIndex.current <= currentPhrase.length) {
        setPlaceholderText(currentPhrase.substring(0, wordIndex.current));
        wordIndex.current++;
      } else {
        wordIndex.current = 0;
        cycleIndex.current = (cycleIndex.current + 1) % placeholderCycle.current.length;
      }
    }, 100); 
  };

  async function reviewCode() {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Error fetching review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
              placeholder={placeholderText}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          {loading ? (
            <div className="loader-container">
              <img src={horseRunningWebp} alt="Loading..." className="loader-webp" />
            </div>
          ) : (
            <Markdown rehypePlugins={[rehypeHeighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;