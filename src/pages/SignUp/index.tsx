import React, { useCallback, useEffect, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useNavigate } from 'react-router-dom';

import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import * as Yup from 'yup';

import { toast } from 'react-toastify';
import Button from '../../components/Button';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, FormHeader, LogInContainer } from './styles';
import { ApiService } from '../../services/ApiService';
import { useScroll } from '../../hooks/scroll';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { setScrollState } = useScroll();

  useEffect(() => {
    setScrollState(false);

    return () => {
      setScrollState(true);
    };
  }, [setScrollState]);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      const api = new ApiService();
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        toast.promise(api.createUser(data), {
          pending: 'Submitting...',
          success: {
            render:
              'Account created successfully! You will be redirected shortly.',
            onClose: () => {
              const { pathname } = window.location;
              pathname !== '/login' && navigate('/login');
            },
          },
          error: {
            render({ data: error }) {
              return `Error: ${error?.response?.data?.message}`;
            },
          },
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [navigate],
  );

  return (
    <Container>
      <Content>
        <FormHeader>
          <h1>Create new account</h1>
          <h3>We just need some info and you&apos;re good to go.</h3>
        </FormHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="name"
            icon={FiUser}
            containerStyle={{ marginBottom: '1rem' }}
            placeholder="Name"
          />
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

          <Button type="submit">Sign Up</Button>
        </Form>

        <LogInContainer>
          <p>Already a member?</p>
          <Link to="/login">Log In</Link>
        </LogInContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
