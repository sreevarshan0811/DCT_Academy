const userReducer = (state , action ) => {
    switch(action.type) {
        case "LOGIN" : {
            return ({ ...action.payload} )
        }
        case "LOGOUT" : {
            return ({ isLoggedIn : false , user: null})
        }
        default : {
            return {...state}
        }

    }

}
export default userReducer