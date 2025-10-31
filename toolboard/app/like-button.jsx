// This tells React to render the component on the client.
'use client';

import {useState} from 'react';

export default function LikeButton() { 
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Likes ({likes})</button>
}