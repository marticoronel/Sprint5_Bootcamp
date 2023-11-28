import "./access.css"
import React, { useState } from 'react'

export default function Access() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("")
    const evento = (e) => setEmail(e.target.value)
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(validateEmail (email));
        if (validateEmail(email) == true) {
            setError("Valid email address")
        } else {
            setError("Please enter a valid email address")
        }
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (<>

        <div className="access-container">
            <h2 className="access__title">Ger early access today</h2>
            <span className="access__text">It only takes a minute to sing up and our free sterter tier is extremely generous. If you have any<br />questions, our support team would be happy to help you.</span>
            <div className="access-input-btn">
                <form className="form--access"  onSubmit={handleOnSubmit}>
                    <input onChange={evento}
                        class="access__input"
                        type="text"
                        id="mail"
                        placeholder="email@example.com">
                    </input> 
                    <button className="access__button"> Get Started For Free</button> <br />
                    <span className="texto--validacion">{error}</span>
                </form>
            </div>
        </div>
    </>)
}