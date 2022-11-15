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