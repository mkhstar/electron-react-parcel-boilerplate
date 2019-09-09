import React, { useEffect, useState } from 'react';
const fs = window.require('fs');
const path = window.require('path');

const HelloWorld = () => {
    const [css, setCss] = useState('');
    useEffect(() => {
        const cssFile = fs.readFileSync(
            path.join(__dirname, '..', 'custom.css'),
            'utf-8'
        );
        setCss(cssFile);
    }, []);
    return <h1>{css}</h1>;
};

export default HelloWorld;
