import React, { useEffect, useState } from 'react';
import axios from 'axios';

const initFriendsState = []

const FriendsList = () => {
    const [friendsState, setFriendsState] = useState(initFriendsState)

    useEffect(() => {
        axios.get('http://localhost:9000/api/friends', {
        headers: {
            authorization: localStorage.getItem("token")
        }
        })
        .then(res => {
            setFriendsState(...friendsState, res.data)
        })
        .catch(err => console.log(err))
    }, [])

    console.log(friendsState)

    return (
        <div className="friends-list" >
            <h1>Friends List</h1>
            {friendsState.length > 0 ? friendsState.map(friend => (
                <div key={friend.id}>
                    <p>{friend.name} - {friend.email}</p>
                </div>
            )) : <p>Loading...</p>}
        </div>
    )
}

export default FriendsList