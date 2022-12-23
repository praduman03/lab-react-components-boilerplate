import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GallaryHeader from './components/GallaryHeader';
import GallaryBody from './components/GallaryBody';



function App() {
  return (
    <div>
      <GallaryHeader/>

      <GallaryBody/>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
