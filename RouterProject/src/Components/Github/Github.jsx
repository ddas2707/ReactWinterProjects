import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/ddas2707')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className='bg-gray-600 text-color text-3xl m-4 p-4 text-center'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="git_picture" width='100' />
        </div>
    )
}

export default Github