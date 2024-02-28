import './App.css';
import DefRoutes from './Routes/DefRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <main className="App" id='top'>
      <Navbar />
      <div className="content">
        <DefRoutes />
      </div>
      <Footer />
    </main>
  );
}

export default App;
