//This imports all the contet from the components folder 

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// main part of the app 
function App() {
  return (
    //this is where the conent is displayed 
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
//ends with it been exportred
export default App;