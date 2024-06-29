import './App.css';
import NavBar from './Navbar';
import Header from './Header';
import Breadcrumbs from './BreadCrumbs';
import TeachersList from './TeachersList';
import Footer from './Footer';

function App() {
  const teachers = [
    {
      fullName: 'mohamed ben',
      description: 'PHD in computer science',
      courses: 2
    },
    {
      fullName: 'ahmad bel',
      description: 'Masters degree in systeme engineering',
      courses: 4,
    }
  ]

  return (
    <div className='content'>
      <NavBar />
      <hr></hr>
      <Breadcrumbs />
      <Header />
      <TeachersList teachers={ teachers }/>
      <Footer />
    </div>
  )
}

export default App;