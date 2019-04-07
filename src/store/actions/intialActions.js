import axios from 'axios'

export const loadApi = (data) => {
    return (dispatch) => {
        if(data === 1){
            axios.get('https://my-json-server.typicode.com/aswin94/jsongen/page').then((res) => {
                dispatch({ type: 'PAGE_1', payLoad: res.data })
            }).catch((err) => {
                dispatch({ type: 'PAGE_ERROR', payLoad: err })
            })
        }
        else if (data === 2){
            axios.get('https://my-json-server.typicode.com/aswin94/jsongen/page2').then((res) => {
                dispatch({ type: 'PAGE_2', payLoad: res.data })
            }).catch((err) => {
                dispatch({ type: 'PAGE_ERROR', payLoad:err })
            })        }
        else if(data === 3){
            axios.get('https://my-json-server.typicode.com/aswin94/jsongen/page3').then((res) => {
                dispatch({ type: 'PAGE_3', payLoad: res.data })
            }).catch((err) => {
                dispatch({ type: 'PAGE_ERROR', payLoad:err })
            })        }
        else
            dispatch({ type: 'PAGE_ERROR' })
    }
};