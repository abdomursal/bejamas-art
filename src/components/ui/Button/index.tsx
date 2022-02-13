import React, { ReactNode } from 'react'
import styles from './Button.module.css'
import { ButtonProps } from "src/types/components/ui/Button";

const  Button = ({ buttonType, label, className, onClick, ...props }: ButtonProps) => {
    const buttonClass = buttonType === 'secondary' ? styles.secondary : styles.primary;
    return (
        <button className={`${buttonClass} ${className}`} onClick={onClick} {...props}>
            {label}
        </button>
    )
}

export default Button


