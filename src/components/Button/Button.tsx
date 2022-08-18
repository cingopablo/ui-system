import * as React from 'react'
import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'
import { Flex } from '../Flex/Flex'

export const Button = React.forwardRef(
  <T extends object>(props: ButtonProps<T>, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { variant = 'primary', onlyIcon = false, children, icon, startIcon, endIcon, ...rest } = props

    if (onlyIcon) {
      return (
        <StyledButton variant={variant} onlyIcon ref={ref} {...rest}>
          <Flex
            css={{
              zIndex: 1,
            }}>
            {icon}
          </Flex>
        </StyledButton>
      )
    }

    return (
      <StyledButton variant={variant} ref={ref} {...rest}>
        {startIcon ? (
          <Flex
            css={{
              marginRight: 'var(--spacing-2)',
            }}>
            {startIcon}
          </Flex>
        ) : null}
        {children}
        {endIcon ? (
          <Flex
            css={{
              marginLeft: 'var(--spacing-2)',
            }}>
            {endIcon}
          </Flex>
        ) : null}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
