import './App.css'
import Login from './Components/Login';
import Register from './Components/Register';
// import Task from './Page/Task';

function App() {

  return (
    <>
      {/* <form action="http://localhost:5000/sendData" method="post">
        <input type="text" name="test" placeholder="some word" />
        <input type="text" name="numbur" placeholder="enter the id" />
        <input type="submit" value="send" />
      </form> */}
      <Register />
      <Login />
      {/* <Task/> */}
    </>
  );
}

export default App
