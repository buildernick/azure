import React from 'react';
import styled from 'styled-components';
import useFluentTokens from '../theme/useFluentTokens';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}) => {
  const tokens = useFluentTokens();
  
  const StyledButton = styled.button`
    font-family: ${tokens.fonts.family};
    font-weight: ${tokens.fonts.weight.semibold};
    border-radius: ${tokens.borderRadius.m};
    transition: all ${tokens.animation.duration.fast} ${tokens.animation.curve.ease};
    
    /* Size variants */
    padding: ${size === 'small' 
      ? `${tokens.spacing.xs} ${tokens.spacing.s}`
      : size === 'medium'
      ? `${tokens.spacing.s} ${tokens.spacing.m}`
      : `${tokens.spacing.m} ${tokens.spacing.l}`};
      
    font-size: ${size === 'small' 
      ? tokens.fonts.size.xs
      : size === 'medium'
      ? tokens.fonts.size.m
      : tokens.fonts.size.l};
    
    /* Style variants */
    background-color: ${variant === 'primary' 
      ? tokens.colors.brand.primary
      : variant === 'secondary'
      ? 'transparent'
      : tokens.colors.background.subtle};
      
    color: ${variant === 'primary' 
      ? 'white'
      : variant === 'secondary'
      ? tokens.colors.brand.primary
      : tokens.colors.text.primary};
      
    border: ${variant === 'secondary'
      ? `1px solid ${tokens.colors.brand.primary}`
      : 'none'};
    
    &:hover {
      background-color: ${variant === 'primary' 
        ? tokens.colors.brand.secondary
        : variant === 'secondary'
        ? tokens.colors.background.subtle
        : tokens.colors.background.emphasized};
    }
    
    &:focus {
      outline: 2px solid ${tokens.colors.brand.primary};
      outline-offset: 2px;
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
