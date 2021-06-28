import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({text, link, padding, borderRadius, fontSize}) => {
    const btnStyle = {
        padding,
        borderRadius,
        fontSize
    }

    return (
        <div className="btn" style={btnStyle}>
            {text}
        </div>
    )
}

Button.defaultProps = {
    link: '#',
    padding: '.5em 1.75em',
    borderRadius: '5em',
    fontSize: '1rem',
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
