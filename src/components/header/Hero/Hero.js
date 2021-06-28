import React from 'react'
import Button from '../../Button/Button'
import './hero.css'
import WorkingImg from '../../../images/illustration-working.svg'

const Hero = ({headerText, text}) => {
    return (
        <section className="hero flex flex-row my-20 justify-between">
            <div className="group-1 flex flex-col ">
                <h2 className="text-black">{headerText}</h2>
                <p className="mb-6">{text}</p>
                <div>
                <Button text={"Get Started"}  padding=".3em 1.75em" fontSize="1.25rem"/>
                </div>
                
            </div>

            <div className="img-container ">
            <img src={WorkingImg} alt="" />
            </div>
            
            
            
        </section>
    )
}

Hero.defaultProps = {
    headerText: "More than just shorter links",
    text: "Build your brand’s recognition and get detailed insights on how your links are performing."
}

export default Hero
