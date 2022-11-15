import reactLogo from './assets/react.svg'
import './App.css'
import { RecoilRoot } from 'recoil';
import Counter from './Counter';

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://recoiljs.org/ko/" target="_blank">
          <img src="https://recoiljs.org/ko/img/logo.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>React + Recoil</h1> */}
      <div className="card">
        <Counter />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
