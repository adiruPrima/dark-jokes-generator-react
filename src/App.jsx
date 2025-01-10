import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [firstClick, setFirstClick] = useState(true);

  const [setup, setSetup] = useState(null);
  const [punchline, setPunchline] = useState(null);

  const [loading, setLoading] = useState(false);

  function jokeClick() {
    setIsRevealed((prev) => !prev);
    setFirstClick(false);
  }

  function generateJoke() {
    setIsStart(true);
    setIsRevealed(false);
    setLoading(true);

    axios
      .get("https://v2.jokeapi.dev/joke/Dark?type=twopart")
      .then((response) => {
        console.log(response.data);
        setSetup(response.data.setup);
        setPunchline(response.data.delivery);
        setLoading(false);
      });
  }

  useEffect(() => {
    generateJoke;
  }, [loading]);

  return (
    <div className="bg-slate-800 text-white min-h-screen p-10 text-center">
      <h1 className="text-3xl font-semibold my-12">Dark Jokes Generator</h1>
      <div className="flex flex-col min-h-80">
        {isStart && (
          <div>
            <button
              onClick={jokeClick}
              className="p-7 mb-12 text-3xl text-teal-300 bg-teal-100 bg-opacity-10 relative"
            >
              {firstClick &&
                (loading ? (
                  ""
                ) : (
                  <p className="text-green-300 text-xl absolute top-[-1rem] right-[-1rem] rotate-12 animate-pulseText">
                    click the joke
                  </p>
                ))}
              {loading ? "Loading..." : setup}
            </button>
            {isRevealed && (
              <p className="text-4xl mb-10 text-indigo-200">{punchline}</p>
            )}
          </div>
        )}
        <button
          onClick={generateJoke}
          className="mt-auto mx-auto text-2xl bg-green-400 text-slate-950 p-3 rounded-full min-w-80 transition-colors duration-300 hover:bg-green-300"
        >
          {isStart ? "Next →" : "Start"}
        </button>
      </div>
      <img
        src="/public/the-rock-sus-transparent.png"
        alt=""
        className="fixed bottom-[-3rem] hidden lg:block opacity-50 scale-90"
      />
      <img
        src="/public/sus-dog-transparent.png"
        alt=""
        className="fixed bottom-[-5rem] right-0 hidden lg:block opacity-50"
      />
    </div>
  );
}

export default App;
