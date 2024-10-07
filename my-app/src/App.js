
//This imports all the contet from the components folder and the routor 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Read from './components/read';
import Create from './components/Create';
// main part of the app 
function App() {
  //this is where the conent is displayed 
    //also added the nav bar to the code with the routes been changed too
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}
//ends with it been exportred
export default App;

