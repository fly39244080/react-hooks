import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'
import '../styles/index.scss'
export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    label:string,
    href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: FC<ButtonProps> = (props) => {
    const { btnType,className, disabled,size, children, href, label,...restProps} = props;
    const cNames = classNames('btn',className,{
        [`btn-${size}`]:size,
        [`btn-${btnType}`]:btnType,
        [`btn-disabled`]:disabled
    });
    return (
        <>
            <button disabled={disabled}  className={cNames} {...restProps}>{children} {label}</button>
        </>
    )
}
