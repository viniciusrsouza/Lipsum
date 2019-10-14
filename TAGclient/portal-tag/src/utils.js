import sha1 from 'crypto-js/sha1'

export const server = {
    url: 'http://localhost.com/3100'
}

export const endpoints = {
    login: {
        method: 'POST',
        path: '/login'
    },
    register: {
        method: 'POST',
        path: '/register'
    },
    user: {
        method: 'GET',
        path: '/user'
    },
}

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

export async function authenticate(id, cb){
    localStorage.setItem('session-id', id)
    return cb()
}

export async function signout(cb){
    localStorage.removeItem('session-id')
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