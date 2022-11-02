import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/home';
import Customers from './pages/customers';
import CustomerDetails from './pages/customer-details';
import AddLoan from './pages/customer-details/addLoan';
import AddCustomer from './pages/customers/add.js';
import Login from './pages/login';
import Layout from './components/layout';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Poppins', sans-serif`,
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
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
          <Route
            path='/customers'
            element={
              <Layout>
                <Customers />
              </Layout>
            }
          ></Route>
          <Route
            path='/customer/:id'
            element={
              <Layout>
                <CustomerDetails />
              </Layout>
            }
          ></Route>
          <Route
            path='/addcustomer'
            element={
              <Layout>
                <AddCustomer />
              </Layout>
            }
          ></Route>
          <Route
            path='/addloan/:id'
            element={
              <Layout>
                <AddLoan />
              </Layout>
            }
          ></Route>

          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
