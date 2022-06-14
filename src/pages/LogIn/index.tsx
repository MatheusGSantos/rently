import React, { useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, Location, useLocation, useNavigate } from 'react-router-dom';

import { FiLock, FiMail } from 'react-icons/fi';

import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  CheckboxContainer,
  Container,
  Content,
  FormHeader,
  PasswordActionsContainer,
  SignupContainer,
} from './styles';
import { useScroll } from '../../hooks/scroll';

interface LoginFormData {
  email: string;
  password: string;
  stayLogged: boolean;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { setScrollState } = useScroll();

  useEffect(() => {
    setScrollState(false);

    return () => {
      setScrollState(true);
    };
  }, [setScrollState]);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Insert a valid e-mail'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(
          {
            email: data.email,
            password: data.password,
          },
          data.stayLogged,
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
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
            autoComplete="email"
          />
          <Input
            name="password"
            icon={FiLock}
            containerStyle={{ marginBottom: '1rem' }}
            type="password"
            placeholder="Senha"
            autoComplete="current-password"
          />

          <Button type="submit">Sign In</Button>

          <PasswordActionsContainer>
            <CheckboxContainer>
              <Checkbox name="stayLogged" />
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

export default LogIn;
