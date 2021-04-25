/* eslint-disable no-void */
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiAtSign } from 'react-icons/fi'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

import { getValidationErrors } from '../../utils/getValidationErrors'
import { api } from '../../services/api'
import { useDebounce } from '../../hooks/useDebounce'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Content } from './styles'

interface SignUpFormData {
  name: string
  email: string
  password: string
  username: string
}

interface CheckUsernameIsAvailableResult {
  available: boolean
}

export function Register (): ReactElement {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setIsLoading] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
  const [userIsAvailable, setUserIsAvailable] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  async function checkUserIsAvailable (username: string): Promise<boolean> {
    try {
      const { data } = await api.get<CheckUsernameIsAvailableResult>(
            `/users/checkavailability?username=${username}`
      )

      return data.available
    } catch (err) {
      return false
    }
  }

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        void checkUserIsAvailable(debouncedSearchTerm).then(available => {
          setIsSearching(false)
          setUserIsAvailable(available)
        })
      } else {
        setUserIsAvailable(false)
        setIsSearching(false)
      }
    },
    [debouncedSearchTerm]
  )

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          username: Yup.string()
            .required('Nome de usuário obrigatório')
            .min(4, 'No mínimo 4 dígitos'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'No mínimo 6 dígitos')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        setIsLoading(true)

        await api.post('/users', {
          ...data,
          invite_guid: ''
        })

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
    [history]
  )

  return (
    <Container>
      <Content>
        <h1>Cadastro</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input
            className="username-input"
            name="username"
            icon={FiAtSign}
            placeholder="Apelido"
            onChange={(e) => setSearchTerm(e.target.value)}
            isLoading={isSearching && searchTerm.length > 3}
            available={userIsAvailable && searchTerm.length > 3 && !isSearching}
          />
          {!isSearching && !userIsAvailable && searchTerm.length > 3 && (
            <div className="message not-available">
              Nome de usuário já está sendo utilizado
            </div>
          )}
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type={showPassword ? 'text' : 'password'}
            placeholder="Senha"
            toggle={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
          />
          <Button type="submit" loading={loading}>Cadastrar</Button>
        </Form>

        <div className="links">
          <Link to="/login">
            <FiArrowLeft size={20} />
            Já tem uma conta? Faça o login
          </Link>
        </div>
      </Content>
    </Container>
  )
}
