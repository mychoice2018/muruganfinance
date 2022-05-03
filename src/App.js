import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/home';
import Login from './pages/login';
import Layout from './components/layout';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        ></Route>

        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
