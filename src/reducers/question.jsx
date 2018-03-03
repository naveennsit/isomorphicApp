
export default function (state=null , action) {
    switch (action.type){
        case 'FETCH_QUESTION' :
            state =action.payload || []
            break;
    }
    return state
}
