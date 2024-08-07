import './App.css'

function App() {

  return (
    <>
      <form action="http://localhost:5000/sendData" method="post">
        <input type="text" name="test" placeholder="some word" />
        <input type="text" name="numbur" placeholder="enter the id" />
        <input type="submit" value="send" />
      </form>
    </>
  );
}

export default App
