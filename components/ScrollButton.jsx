import React, { useState, useEffect } from 'react';
import {
    ScrollIndicatorStyle
} from './styles/Style';

const ScrollButton = () => {
    const [content, setContent] = useState('v');
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        var scrollingElement = (document.scrollingElement || document.body);
        if (scrollTop === scrollingElement.scrollHeight) {
            setContent('＾');
        } else {
            setContent('v');
        }
    }, [scrollTop]);

    const ScrollToBottom = () => {
        var scrollingElement = (document.scrollingElement || document.body);
        if (scrollTop === scrollingElement.scrollHeight) {
            scrollingElement.scrollTop = 0;
            setScrollTop(0);
        } else {
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
            setScrollTop(scrollingElement.scrollHeight);
        }
    };

    return (
        <ScrollIndicatorStyle variant="major" onClick={ScrollToBottom}>{ content}</ScrollIndicatorStyle>
    )
}

export default ScrollButton;

