import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from './Button.module.scss'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type ButtonProps = DefaultButtonPropsType & {
    color:string
    children:string
}
export  const Button = ({color, children, ...rest}:ButtonProps) => {
    const className= `${styles.button} ${styles[`button_${color}`]}`
    return (
        <button  className={className} { ...rest } >{children}</button>
    );
};


