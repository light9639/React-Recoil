import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from './state';

const Count = () => {
    const count = useRecoilValue(charCountState);

    return <> Count : {count} </>;
};

export default Count;