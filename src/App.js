import './App.css';
import Form from './Components/Form';
import Comments from './Components/Comments';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="form-content">
          <Form />
        </div>
        <hr /> 
        <div className="comments-content">
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
