// App.js
import './App.css';
import ImageResults from './Components/ImageResults/ImageResults';
import Search from './Components/Search/Search';

function App() {

  return (
    <>
    <h1 className='heading'>Image Gallery React</h1>
      <Search />
      <ImageResults/>
    </>
  );
}

export default App;
