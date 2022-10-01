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
      profile_pic: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/v1397181528/115e6fa16646bb4a44e532182b1dc57a.jpg'
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
