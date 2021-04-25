import { ReactElement, useCallback, useRef, useState } from 'react'
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

import { getValidationErrors } from '../../utils/getValidationErrors'
import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Content } from './styles'

interface LoginFormData {
  usernameoremail: string
  password: string
}

export function Login (): ReactElement {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          usernameoremail: Yup.string().required('Usuário/e-mail obrigatório'),
          password: Yup.string()
            .required('Digite sua senha')
            .min(6, 'Sua senha tem no mínimo 6 digitos')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        setIsLoading(true)

        await login(data)

        setIsLoading(false)

        history.push('/')

        alert('Cadastrou muchacho!')
      } catch (err) {
        setIsLoading(false)

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        alert('Ih deu zebra!')
        console.log(err)
      }
    },
    [history, login]
  )

  return (
    <Container>
      <Content>
        <h1>Login</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="usernameoremail" icon={FiUser} placeholder="Usuário ou E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            toggle={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />
          <Button type="submit" loading={loading}>Fazer login</Button>
        </Form>

        <div className="links">
          <Link to="/register">
            <FiArrowLeft size={20} />
            Fazer cadastro
          </Link>
          <Link to="/forgot-password">
            <FiArrowLeft size={20} />
            Esqueci minha senha
          </Link>
        </div>
      </Content>
    </Container>
  )
}
