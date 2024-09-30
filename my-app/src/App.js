//This imports all the contet from the components folder 

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
//addimg a nav bar to the app
import Header from './components/NavigationBar';
import NavigationBar from './components/NavigationBar';
// main part of the app 
function App() {
  return (
    //this is where the conent is displayed 
    //also added the nav bar to the code 
    <div>
      <NavigationBar />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
//ends with it been exportred
export default App;