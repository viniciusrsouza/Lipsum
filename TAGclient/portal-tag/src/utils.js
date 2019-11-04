import sha1 from 'crypto-js/sha1'
import { get, endpoints } from './network/http-methods'

// função para debug
export function logUser(isAdmin){
    return isAdmin?
    {
        first_name: 'Usuário',
        last_name: 'Administrador',
        isAdmin: isAdmin
    }:
    {
        first_name: 'Usuário',
        last_name: 'padrão',
        isAdmin: isAdmin
    }
}

export async function authenticate(id, queryId, cb){
    localStorage.setItem('query-id', queryId)
    localStorage.setItem('session-id', id)
    loadUser()
    return cb()
}

export async function signout(cb){
    localStorage.removeItem('session-id')
    localStorage.removeItem('query-id')
    localStorage.removeItem('current-user')
    return cb()
}
export async function getUserFromSession(session, cb){
    const adminSession = sha1('lipsumbcc@gmail.com' + sha1('engenharia'))
    if(session == adminSession) return cb(logUser(true))
    else return cb(logUser(false))
}

export function getSession(cb){
    return cb(localStorage.getItem('session-id'))
}


export function isAdmin(){
    return localStorage.getItem('session-id').isAdmin
}

export function isEmpty(str){
    return str === ""
}

export function validate(value, element, cb){
    if(isEmpty(value)){
        element.style.setProperty('border', '1px solid red')
        return false
    }else return true
}

export async function loadUser(){
    const userQuery = localStorage.getItem('query-id')
    if(userQuery){
        get(endpoints.users, {email:userQuery}, (user) => {
            console.log(user[0])
            localStorage.setItem('current-user', JSON.stringify(user[0]))
        })
    }
}

export function getUser(){
    return JSON.parse(localStorage.getItem('current-user'))
}

export async function getUserFromEmail(email, callback){
    return get(endpoints.users, {email: email}, callback)
}