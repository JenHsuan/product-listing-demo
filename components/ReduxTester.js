import React, { useEffect } from 'react';

import {
    useSelector,
    useDispatch
} from "react-redux";

import {
    getUsers,
    getData
} from "./actions/action";

import {
    selectUsers,
    selectData
} from "./states/states";

import {
    TemplateStyle,
} from './styles/Style';

const ReduxTester = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectData);
    useEffect(() => {
        dispatch(getData());
    },[]);

    return (
        <>
            <TemplateStyle variant='header'>header</TemplateStyle>
            <TemplateStyle variant='main'>
                <article data-testid="text-content">
                    {data}
                </article>
                <nav>nav</nav>
                <aside>aside</aside>
            </TemplateStyle>
            <TemplateStyle variant='footer'>footer</TemplateStyle>
        </>
    )
}

export default ReduxTester
