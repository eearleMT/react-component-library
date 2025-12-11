import React from 'react';
import './MTButton.scss';

export const PlusIcon = () => (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 3.333v9.334M3.333 8h9.334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const TrashIcon = () => <img src="/trash.svg" alt="Trash" />;

export type ButtonProps = {
    color?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    variant?: 'outline' | 'filled' | 'delete';
    children?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
};

export const MTButton: React.FC<ButtonProps> = ({
    color = 'primary',
    size = 'md',
    variant = 'filled',
    children,
    icon,
    onClick,
    disabled = false,
    type = 'button',
}) => {
    const className = `mt-button size-${size} variant-${variant} color-${color} disabled-${disabled}`;

    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {icon}
            {children}
        </button>
    );
};
