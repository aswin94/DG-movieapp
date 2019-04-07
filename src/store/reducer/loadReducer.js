
const initState = {
    data: []
};

const loadReducer = (state= initState, action ) => {
    switch(action.type)
    {
        case 'PAGE_ERROR':
            console.log("PAGE LOAD FAILED");
            return {
                state
            };

        case 'PAGE_1':
            console.log("PAGE 1 LOADED ");
            return {
                data : action.payLoad
            };

        case 'PAGE_2':
            console.log("PAGE 2 LOADED ");
            return {
                data : action.payLoad
            };
        case 'PAGE_3':
            console.log("PAGE 3 LOADED ");
            return {
                data : action.payLoad
            };
        default:
            return state;
    }
};

export default loadReducer