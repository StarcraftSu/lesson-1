import React from 'react'
import './button.style.scss'

const CustomButton = ({children,...rest}) => (
    <button className="custom-button" {...rest}>{children}</button>
)

export default CustomButton