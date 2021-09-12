import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn, logOut } from './actions';
import './App.css';

function App() {

  const counter = useSelector(state => state.counter)
  const isLoggedIn = useSelector(state => state.logged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Practice App</h1>
      <h1>{ counter }</h1>
      <button onClick={ () => dispatch(decrement()) }>-</button>
      <button onClick={ () => dispatch(increment()) }>+</button>
      {
        isLoggedIn ? 
        <div>
          <h1>You're logged in!</h1>
          <button onClick={ () => dispatch(logOut()) }>Log Out</button>
        </div> : 
        <div>
          <h1>DENIED</h1>
          <button onClick={ () => dispatch(logIn()) }>Log In</button>
        </div>
      }
      
    </div>
  );
}

export default App;
