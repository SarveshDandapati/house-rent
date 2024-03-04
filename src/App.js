import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Slider from './components/Slider';
import MainBody from './components/MainBody';
function App() {
  return (
    <>
      <Header />
      <Menu/>
      {/* <Slider/> */}
      <MainBody/>
    </>
  );
}

export default App;
