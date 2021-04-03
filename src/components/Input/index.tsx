import { InputHTMLAttributes, useEffect, useRef, useState, useCallback, ReactElement, Fragment } from 'react'
import { IconBaseProps } from 'react-icons'
import { FiAlertCircle, FiEye } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  containerStyle?: object
  icon?: React.ComponentType<IconBaseProps>
  toggle?: () => void
  showPassword?: boolean
}

export function Input ({
  name,
  containerStyle = {},
  icon: Icon,
  toggle,
  showPassword,
  ...rest
}: InputProps): ReactElement {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const { fieldName, defaultValue, error, registerField } = useField(name)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <Fragment>
      <Container
        style={containerStyle}
        isErrored={!!error}
        isFilled={isFilled}
        isFocused={isFocused}
        data-testid="input-container"
      >
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        {toggle && (
          <button onClick={toggle} type="button" className={showPassword ? 'active' : ''}>
            <FiEye size={20} />
          </button>
        )}
      </Container>
      {error && <Error><FiAlertCircle />{error}</Error>}
    </Fragment>
  )
}

export default Input
