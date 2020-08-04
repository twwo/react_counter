const updateTotal = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_TOTAL': 
            return action.total;
        default: 
            return state;
    }
} 

export default updateTotal; 