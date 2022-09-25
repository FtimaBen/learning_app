import './App.css';
import NavBar from './Navbar';
import Header from './Header';
import Breadcrumbs from './BreadCrumbs';

function App() {
  return (
    <div className='content'>
      <NavBar />
      <hr></hr>
      <Breadcrumbs />
      <Header />
    </div>
  )
}

export default App;
