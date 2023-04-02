import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Prayertimes from './Pages/Prayertimes';
import Timezone from './Pages/Timezone';
import Calendar from './Pages/Calendar';
import Map from './Pages/Map';
import Menu from './Components/Menu';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient1=new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        refetchOnMount:true
      },
    },
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <div className='routesDiv'>
          <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/Prayertimes" element={ <QueryClientProvider client={queryClient1}><Prayertimes/></QueryClientProvider>} />
          <Route path="/Timezone" element={<Timezone/>} />
          <Route path="/Calendar" element={<Calendar/>} />
          <Route path="/Map" element={<Map/>} />
         
        </Routes>
         </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
