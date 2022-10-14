import logo from "./logo.svg";
import "./App.css";
import app from "./firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const auth = getAuth(app);
function App() {
  const handleBtn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
  const provider = new GoogleAuthProvider();
  return (
    <div className="App">
      <button onClick={handleBtn}>Google Sign in</button>
    </div>
  );
}

export default App;
