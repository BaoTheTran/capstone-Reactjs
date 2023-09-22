import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import renderRoutes from './routes';  
import { createBrowserHistory } from 'history';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const history = createBrowserHistory();

function App() {
  return (
    <>
      <Suspense>
        <BrowserRouter fallback={<div>Loading...</div>}>
          <Routes>

            {renderRoutes()}


          </Routes>
        </BrowserRouter>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
