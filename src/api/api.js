
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

const url1='/api/nodes'
export function getNodes(){
    // return request.get('http://localhost:8000/api/books')
    return request({
        url:url1,
        method:'get'
    })
    
}

const url2='/api/links'
export function getLinks(){
    // return request.get('http://localhost:8000/api/books')
    return request({
        url:url2,
        method:'get'
    })
    
}

const url3='/api/test'
export function getTest(){
    // return request.get('http://localhost:8000/api/books')
    return request({
        url:url3,
        method:'get'
    })
    
}

const url4='/api/test1'
export function getAIRes(data){
    return request.post(
        url4,
        {'data':data}
    )    
}