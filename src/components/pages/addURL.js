import React, { useState } from 'react'

export default function addURL(props) {
    const [urlInput, setUrlInput] = useState("")
    const [url, setUrl] = useState("")
    const [key, setKey] = useState("")

    const handleSubmit = () => {
        fetch("https://aoj-redis-api-february1st.herokuapp.com/url/set", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ "url": urlInput })
        })
        .then(response => response.json())
        .then(data => {
            setKey(data)
            setUrl(urlInput)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='add-url-wrapper'>
            <input 
                type="text"
                placeholder="URL"
                value={urlInput}
                onChange={event => setUrlInput(event.target.value)}
            />
            <button onClick={handleSubmit}>Submit URL</button>
            {key ? <a href={url} target="_blank">{`localhost:3000/${key}`}</a> : null}
        </div>
    )
}