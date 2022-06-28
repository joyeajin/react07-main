import './App.css';
import Style from './components/Style';
import GlobalStyle from './components/GlobalStyle';
import Mainbanner from './components/Mainbanner';
import SubBanner from './components/SubBanner';
import CanSlider from './components/CanSlider';
import ListTotal from './components/ListTotal';



function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Mainbanner/>
      <SubBanner/>
      <CanSlider/>
      <ListTotal/>
      <Style/>
    </div>
  );
}

export default App;
/* 
css
scss
module.css
styled components
css in js
*/