import React, { useState, useEffect } from 'react'

export default function singleURL(props) {
    const [url, setUrl] = useState("")

    useEffect(() => {
        fetch(`https://aoj-redis-api-february1st.herokuapp.com/url/get/${props.urlKey}`)
        .then(response => response.json())
        .then(data => setUrl(data))
        .catch(error => console.log(error))
    }, [])

    return url ? <a href={url} target="_blank">{`localhost:3000/${props.urlKey}`}</a> : null
}