import React from 'react'
import './FooterCta.css'
import Button from '../../Button/Button'
const FooterCta = ({textContent, btnPadding, btnFontSize}) => {
    return (
        <div className="footer__cta">
            <h1 className="f-cta__heading">{textContent}</h1>
            <Button padding={btnPadding} fontSize={btnFontSize} innerText="Get Started"/>
        </div>
    )
}

export default FooterCta
