import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './mainApp/App';

ReactDOM.render(
    <div>
        <h1 className="text-center font-bold text-5xl"
        >Word Frequency</h1>
        <div className={"flex justify-center"}>
            <App />
        </div>
    </div>
    ,
    document.getElementById('root')
);
