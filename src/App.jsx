import React from 'react';
import {connect} from 'react-redux';
import QuestionList from './questionlist';


const App = ()=>(
    <div>
        <h1>
            Isomeric app
            <QuestionList/>
        </h1>
    </div>
)

export default App;