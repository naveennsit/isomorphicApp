import React from 'react';
import { connect } from 'react-redux';




class QuestionList extends React.Component {
    render(){
        return (
            <div>
                { this.props.questions ?
                    <div>
                        {this.props.questions.map(question=><li key={question.question_id}>{question.title}</li>)}
                    </div> :
                    <div>
                        Loading questions...
                    </div>
                }
            </div>
        )
    }
}

/**
 * Get the list of questions from the application's state
 * It is populated by a ../sagas/fetch-question(s)-saga.
 */
const mapStateToProps = (state)=>{
    return {
        questions : state.re
    }
}
export default connect(mapStateToProps)(QuestionList);

