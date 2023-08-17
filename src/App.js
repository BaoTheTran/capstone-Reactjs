import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import renderRoutes from './routes';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense>
      <BrowserRouter fallback={<div>Loading...</div>}> 
          <Routes>

            {renderRoutes()}

    
          </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
