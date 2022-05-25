import React, { useState } from 'react';
import axios from 'axios';

const initFriend = {
    name: "",
    age: null,
    email: ""
}

const AddFriend = () => {
    const [friend, setFriend] = useState(initFriend)
    const [friendAdded, setFriendAdded] = useState(false)

    const handleChange = evt => {
        setFriendAdded(false)
        setFriend({
            ...friend,
            [evt.target.name]: evt.target.value,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/friends', friend, {
            headers: {
                authorization: localStorage.getItem("token")
              } 
        })
        .then(res => {
            setFriendAdded(true)
            setFriend(initFriend)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Add A Friend</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeholder='name'
                    value={friend.name}
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="email"
                    value={friend.email}
                    onChange={handleChange}
                />
                <button>Add Friend</button>
            </form>
            {friendAdded ? <h2>Congratulations! You've added a new friend to your list</h2> : null}
        </div>
    )
}

export default AddFriend