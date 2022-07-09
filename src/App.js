import "./App.css";
import "bootswatch/dist/lux/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom';
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
     <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/signin' element={ <Signin/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/studypage' element={ <StudyPage/> } />
        <Route path='/study/:id' element={ <EditStudy/> } />
        <Route path='/studylist' element={ <StudyList/> } />
     </Routes>
     </main>
     <Footer />
    </>
  );
}

export default App;
