import React from 'react'

class RestrictComponent extends React.Component{
    constructor(props, validateFun){
        const f = validateFun ? validateFun : validate
        f((authorized) => {
            if(!authorized){            
                notAuthorized()
            }else super(props)
        })
    }
}

async function validate(cb){
    return cb(true)
}

function notAuthorized(){
    window.location.href = '/'
}

export default RestrictComponent