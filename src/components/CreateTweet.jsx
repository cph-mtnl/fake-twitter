import { useState } from "react";

export default function CreateTweet({createTweet}) {
  const [myTweet, setMyTweet] = useState("");

  function handleChange(event) {
   setMyTweet(event.target.value)
  }

  function handleTweet() {
   createTweet(myTweet)
   setMyTweet("")
  }

  return (
  <>
    <textarea
     cols={50}
     id="myMind" 
     rows={8}
     placeholder="Make a tweet"
     value={myTweet}
     onChange={handleChange}
    ></textarea>
    <button onClick={handleTweet}>Tweet</button>
  </>
  );
}