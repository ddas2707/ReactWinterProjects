import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div>Plz login</div>
    return <div>Hello {user.username}</div>
}

export default Profile