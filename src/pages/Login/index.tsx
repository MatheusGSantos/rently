import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
// import { useToast } from '../../hooks/toast';
// import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/Logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  CheckboxContainer,
  Container,
  Content,
  FormHeader,
  PasswordActionsContainer,
  SignupContainer,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  // const { addToast } = useToast();

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        navigate('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          // return;
        }

        // addToast({
        //   type: 'error',
        //   title: 'Erro na autenticação',
        //   description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        // });
      }
    },
    [signIn, navigate],
  );

  return (
    <Container>
      <Content>
        <FormHeader>
          <h1>Welcome back</h1>
          <h3>Welcome back! Please enter your details.</h3>
        </FormHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="email"
            icon={FiMail}
            containerStyle={{ marginBottom: '1rem' }}
            placeholder="E-mail"
          />
          <Input
            name="password"
            icon={FiLock}
            containerStyle={{ marginBottom: '1rem' }}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Login</Button>

          <PasswordActionsContainer>
            <CheckboxContainer>
              <input type="checkbox" name="stayLogged" id="stayLogged" />
              <p>Remember me</p>
            </CheckboxContainer>
            <Link to="/forgot-password">Forgot my password</Link>
          </PasswordActionsContainer>
        </Form>

        <SignupContainer>
          <p>Don&apos;t have an account?</p>
          <Link to="/signup">Sign Up</Link>
        </SignupContainer>
      </Content>
    </Container>
  );
};

export default Login;
