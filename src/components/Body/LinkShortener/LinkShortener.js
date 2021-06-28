import React, {useState} from 'react'
import './linkshortener.css'

const LinkShortener = ({urlShortenHandler,error,setError,loading }) => {
    const [shortInput, setShortInput] = useState('')

    const inputHandler = (e) => {
        const value = e.target.value
        setShortInput(value)
    }

    const submitHandler = () => {

        const regex = /[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,7}/;
        if(shortInput === '') {
            setError('Please add a link')
            return
        }
        if(!regex.test(shortInput)) {
            setError('Please enter a valid link')
            return;
        }
        if(error) {
            setError(null)
        }

        urlShortenHandler(shortInput)
    }


    return (
        <div className="shortener">
            <div className="shortener__input-container">
                <input 
                className={error ? 'shortener__input error' : 'shortener__input'}
                onChange={inputHandler}
                type="text" value={shortInput} 
                placeholder="Shorten a link here..."
                />
                {error && <i className="error__msg">{error}</i>}
                <button 
                className={loading ? "shortener__btn loading" : "shortener__btn"} 
                onClick={submitHandler} disabled={loading ? true : false}>
                    {loading ? 'Shortening' : 'Shorten It!'}
                </button>
            </div>
        </div>
    )
}

export default LinkShortener
