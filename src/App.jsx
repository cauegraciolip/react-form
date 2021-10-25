import "./App.css"
import InputArea from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="left-container">
        
      </div>
      <div className="right-container">
        <h2>Bem-vindo de volta</h2>
        <h1>Faça login na sua conta</h1>
        <InputArea subject="email" />
        <InputArea subject="password" />
        <div className="control-forgot-pass">
          <div className="remember-me">
            <input type="radio" name="radio" id="radio-input" />
            <label htmlFor="input-radio">Lembre de mim</label>
          </div>
          <a href="/">Esqueceu sua senha?</a>
        </div>
      </div>
    </div>
  );
}

export default App;
