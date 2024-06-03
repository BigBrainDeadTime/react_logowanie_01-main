import './App.css';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singup from './components/SingUpForm';
import Main from './components/Main';


const App = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleLogin = (userData) => {
    //dodajemy logikę autoryzacji, np. wysłanie danych do serwera
    setLoggedInUser(userData);
    console.log(userData);
  }
  const handleLogout = () => {
    //dodać logikę wylogowywania
    setLoggedInUser(null);
  }

  return (
    <div className='main'>
      {loggedInUser ? (
        <div>
          <h3>Witaj {loggedInUser.name} {loggedInUser.surname} {loggedInUser.id}  </h3>
          <button onClick={handleLogout}>Wyloguj </button>
        </div>
      ) : (
        // <LoginForm onLogin={handleLogin} />
        <BrowserRouter>
          <Routes>
            <Route index element={<Main/>}></Route>
            <Route path='/loginform' element={<LoginForm onLogin={handleLogin}/>}></Route>
            <Route path='/singupform' element={<Singup/>}></Route>
          </Routes>
        </BrowserRouter>
        //  Renderuje komponent LoginForm.
        //  onLogin={handleLogin} - przekazanie propsa do komponentu LoginForm.
        //  Props o nazwie onLogin jest przypisany do funkcji handleLogin, która została zdefiniowana w komponencie App.
        // LoginForm może przekazać dane logowania z powrotem do komponentu App, który może je przetworzyć i aktualizować stan aplikacji.
      )}

    </div>
  );
}

export default App;
