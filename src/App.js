import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home/Home';
import Signin from './screens/Signin/SigninScreen';
import Signup from './screens/Signup/Signup';
import StudyList from './screens/study/Studylist';
import EditStudy from './screens/Edit/editstudy';
import StudyPage from './screens/study/Studypage';
import Profile from './screens/Profile/ProfileScreen';

function App() {
  return (
    <>
     <Header />
     <main>
     <Router>
        <Route path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/profile' component={Profile} />
        <Route path='/signup' component={Signup}/>
        <Route path='/studypage' component={StudyPage} />
        <Route path='/study/:id' component={EditStudy} />
        <Route path='/studylist' component={StudyList} />
     </Router>
     </main>
     <Footer />
    </>
  );
}

export default App;
