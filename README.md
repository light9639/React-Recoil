# :zap: React, Recoil 사용 예제
:octocat: https://light9639.github.io/React-Recoil/


:sparkles: Recoil를 이용하여 만든 숫자 증가, 감소 예제입니다. :sparkles:
## :tada: React 생성
- React 생성
```bash
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면

```bash
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, javascirpt 선택하면 생성 완료.
## 🚝 Recoil 설치
- Recoil 설치 명령어
```bash
yarn add recoil
```

## ✒️ App.jsx 작성
### :zap: Count.jsx
```bash
import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './state';

const Count = () => {
    const count = useRecoilValue(charCountState);

    return <> Count : {count} </>;
};

export default Count;
```

### :zap: Countr.jsx
```bash
import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from './state';
import Count from './Count';

const Counter = () => {
    return (
        <div className='MainBox'>
            <TextInput />
            <Count />
        </div>
    );
};

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            <p className='input_Contents'>input 속 내용 : {text}</p>
        </div>
    );
}
export default Counter;
```

### :zap: App.jsx
```bash
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
```

### :zap: state.js
```bash
import { atom, selector } from 'recoil';

export const textState = atom({
    key: 'textState',
    default: ''
});

export const charCountState = selector({
    key: 'charCountState',
    get: ({ get }) => {
        const text = get(textState);
        return text.length;
    }
});

```

## 📎 출처
- https://recoiljs.org/docs/introduction/getting-started 문서를 토대로 구현했습니다.