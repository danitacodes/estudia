import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css"; // Added this :boom:
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home/Home";
import Signin from "./screens/Signin/SigninScreen";
import Signup from "./screens/Signup/Signup";
import StudyList from "./screens/study/Studylist";
import EditStudy from "./screens/Edit/editstudy";
import StudyPage from "./screens/study/Studypage";
import Profile from "./screens/Profile/ProfileScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
          <Route path="/studypage" component={StudyPage} />
          <Route path="/study/:id" component={EditStudy} />
          <Route path="/studylist" component={StudyList} />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;