import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import ContentCategory from './Components/ContentCategory/ContentCategory';
import ContentDetails from './Components/ContentDetails/ContentDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Components/Login/Login';
import UserContextProvider from './hooks/UserContext';
import SearchSection from './Components/SearchSection/SearchSection';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchSection />} />
            <Route path='/category/:id' element={<ContentCategory />} />
            <Route path='/detail/:id' element={<ContentDetails />} />
          </Routes>
          {/* <Home/> */}
          {/* <ContentCategory/> */}
          {/* <ContentDetails/> */}
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
