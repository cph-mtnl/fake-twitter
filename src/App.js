import React from 'react';
import "./App.css"
import CreateTweet from './components/CreateTweet';
import Tweet from './components/Tweet';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuCsT0bkxuIhBZfwADK-irBVG9vWg7H4s",
  authDomain: "fake-twitter-6aace.firebaseapp.com",
  projectId: "fake-twitter-6aace",
  storageBucket: "fake-twitter-6aace.appspot.com",
  messagingSenderId: "790893033941",
  appId: "1:790893033941:web:8f7958cef644b847eaa55c"
};

function App() {
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const tweetsCollection = collection(firestore, "tweets");
  
  const [tweets, setTweets] = React.useState([])

  // React.useEffect(() => {
  //   getDocs(tweetsCollection)
  //     .then((snapshot) => {
  //       console.log(snapshot.docs)
  //       const data = snapshot.docs.map((doc) => {
  //         return doc.data()
  //       })
  //       console.log(data);
  //       setTweets(data);
  //     })
  // }, [])

  React.useEffect(() => {
    onSnapshot(query(tweetsCollection), (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data();
      }).sort((a, b) => {
        return b.createdAt - a.createdAt
      })
      setTweets(data);
    })
  }, [])

  console.log(tweets)

  function handleLogin() {
    console.log("Clicked")
  }

  function createTweet(message) {
    console.log(message);
    const data = {
      message,
      createdAt: new Date().getTime()
    }
    addDoc(tweetsCollection, data)
  }

  return (
    <div className='container'>
      <div className='title'>
        <h1>Fake Twitter</h1>
        <button className='login-button' onClick={handleLogin}>Sign in</button>
      </div>
      <CreateTweet createTweet={createTweet} />
      <div className='tweets'>
        {
          tweets.map((tweet) => {
            return <Tweet displayName={tweet.displayName} message={tweet.message} />
          })
        }
      </div>
    </div>
  );
}

export default App;
