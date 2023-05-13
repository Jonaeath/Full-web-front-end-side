
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Routes/Routes/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <RouterProvider
      router = {routers}
      >

      </RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
