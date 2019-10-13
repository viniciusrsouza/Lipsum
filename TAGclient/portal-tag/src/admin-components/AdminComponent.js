import RestrictComponent from './RestrictComponent'
import { getUserFromSession, getSession } from '../utils'

class AdminComponent extends RestrictComponent{
    constructor(props){
        super(props, validate)
    }
}

async function validate(cb){
    return await getUserFromSession(
        getSession(session => session),
        user => cb(user.isAdmin))
}

export default AdminComponent