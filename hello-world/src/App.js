import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/hello';
import Message from './components/message';
import {CakeView} from './features/cake/CakeView'
import {IcecreamView} from './features/icecream/IcecreamView'
import {UserView} from './features/user/UserView'

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      {/* <Greet name="As" heroName="Superman"/> */}
      {/* <p>This is children props</p> */
      // <Greet name= "Bi" heroName="Spiderman"/>
     /* <button>Action</button>
      <Greet name="Ass"  heroName="Batman"/>
      <Welcome name="As" heroName="Superman"/>
      <Welcome name="Bi" heroName="Spiderman"/>
      <Welcome name="Ass" heroName="Batman"/>
      //<Hello/>  */}
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  );
}

export default App;
