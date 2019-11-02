export const root = "http://127.0.0.1:8000"
export const endpoints = {
    login:`${root}/login/`,
    users:`${root}/Usuario/`,
    projects:`${root}/Projeto/`,
}

export async function get(url, params, callback, errorCallback){
    const headers = {
        'Content-Type': 'application/json',
    }

    const init={
        method: 'GET',
        headers: headers,
        params: JSON.stringify(params)
    }
    fetch(url, init).then(response => {
        console.log(response)
        return response.body.getReader().read().then(({ _, value }) => {
            callback(JSON.parse(new TextDecoder("utf-8").decode(value)))
          })
    }).catch(error => console.log(error))
}

export async function post(url, params, callback, errorCallback){
    console.log({url: url, params: params})
    
    const headers = {
        'Content-Type': 'application/json'
    }
    const init={
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params)
    }
    fetch(url, init).then(response => {
        console.log(response)
        return response.body.getReader().read().then(({ _, value }) => {
            callback(JSON.parse(new TextDecoder("utf-8").decode(value)))
          })
    }).catch(error => {
        return errorCallback(error)
    })
}