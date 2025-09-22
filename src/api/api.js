
import request from '../util/request'
const url = '/api/books/'
export function getBooks(){
    // return request.get('http://localhost:8000/api/books')
    return request({
        url:url,
        method:'get'
    })
    
}
// export const getBooks=()=>getapi('/api/books')

export function postBook(bookName,bookAuthor){
    return request.post(url,{'name':bookName,'author':bookAuthor})
}
