import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./starRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating="10" color="blue" onSetRating={setMovieRating} />
//       <p>This movie is rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating color="red" />
    <StarRating
      messages={["Bad", "Okay", "Good", "Great", "Amazing"]}
      defaultRating="3"
    />
    <Test /> */}
  </React.StrictMode>,
);
