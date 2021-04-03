import { ReactElement, useCallback, useRef, useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiAtSign } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
import getValidationErrors from '../../utils/getValidationErrors'
import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Content } from './styles'

interface SignUpFormData {
  name: string
  email: string
  password: string
  username: string
}

export function Register (): ReactElement {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        await api.post('/users', {
          ...data,
          invite_guid: ''
        })

        history.push('/')

        alert('Cadastrou muchacho!')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        alert('Ih deu zebra!')
        console.log(err)
      }
    },
    [history]
  )

  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="username" icon={FiAtSign} placeholder="Apelido" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            toggle={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <div className="links">
          <Link to="/login">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </div>
      </Content>
    </Container>
  )
}
