export const addUser = (user) => {
    console.log('user inside action', user)
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}