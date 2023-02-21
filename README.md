# 📂 React, Recoil 사용 예제
:octocat: https://light9639.github.io/React-Recoil/

![127 0 0 1_5500_React-Recoil_dist_index html](https://user-images.githubusercontent.com/95972251/201916379-e920630a-753b-4799-89b8-b3cd0f3c394e.png)

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

## ✒️ Count.jsx, Counter.jsx, App.jsx, state.js 작성
### :zap: Count.jsx
- `Count` 값을 나타내는 `jsx` 파일
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

### :zap: Counter.jsx
- `Count.jsx`는 `input` 속의 내용이 몇글자인지를 파악하여 화면에 나타내는 컴포넌트인데, 이 컴포넌트를 가져와서 맨 아래 위치시킨다.
- `TextInput` 컴포넌트는 밑에 만들어 놓는다. 이 컴포넌트는 input 속 내용이 바뀔 때마다 값을 변화시키고, 그 값을 화면에 나타나게 한다.
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
- `<div className="card"></div>` 안에 `Counter` 컴포넌트를 가져와서 안에 넣어둔다.
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
- `textState`는 `input` 속 데이터의 값을 그대로 출력하게 만든다.
- `charCountState`는 `input` 속 데이터의 길이를 숫자로 출력하게 한다.
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
