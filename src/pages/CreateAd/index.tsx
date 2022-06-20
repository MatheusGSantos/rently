import { FormHandles } from '@unform/core';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import Skeleton from 'react-loading-skeleton';
import { ApiService } from '../../services/ApiService';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, FormHeader } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface CreateObjectFormData {
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
}

const CreateAd: React.FC = () => {
  const api = new ApiService();
  const formRef = useRef<FormHandles>(null);
  const [imgSrc, setImgSrc] = useState('');

  // const getCategoryId = (category: string | null): string => {
  //   switch (category) {
  //     case 'Cars':
  //       return '1';
  //     case 'Computers':
  //       return '2';
  //     case 'Furniture':
  //       return '3';
  //     case 'Kitchen':
  //       return '4';
  //     case 'Smartphones':
  //       return '5';
  //     case 'Gaming':
  //       return '6';
  //     default:
  //       return '';
  //   }
  // };

  const handleSubmit = useCallback(async (data: CreateObjectFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        image: Yup.string().url('Invalid URL'),
        name: Yup.string().required('Título obrigatório'),
        description: Yup.string().required('Descrição obrigatória'),
        price: Yup.number().required('Preço obrigatório').min(0),
        category: Yup.string()
          .required('Categoria obrigatória')
          .oneOf([
            'Cars',
            'Computers',
            'Furniture',
            'Kitchen',
            'Smartphones',
            'Gaming',
          ]),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      toast.promise(api.createObject(data), {
        pending: 'Submitting...',
        success: {
          render: 'Ad created successfully! You can see it in the list of ads.',
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
  }, []);

  useEffect(() => {
    console.log(imgSrc);
  }, [imgSrc]);

  return (
    <Container>
      <Content>
        <FormHeader>
          <h1>Create new ad</h1>
          {imgSrc ? (
            <img src={imgSrc} alt="preview" />
          ) : (
            <Skeleton height="350px" width="600px" />
          )}
        </FormHeader>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="image"
            containerStyle={{ marginBottom: '1rem' }}
            onChange={(e) => {
              setImgSrc(e.target.value);
            }}
            placeholder="Image URL (Optional)"
          />
          <Input
            name="name"
            containerStyle={{ marginBottom: '1rem' }}
            placeholder="Title"
          />
          <Input
            name="description"
            containerStyle={{ marginBottom: '1rem' }}
            placeholder="Description"
          />
          <Input
            name="price"
            containerStyle={{ marginBottom: '1rem' }}
            placeholder="Price"
          />
          <Input
            name="category"
            containerStyle={{ marginBottom: '1rem' }}
            placeholder="Category"
          />

          <Button type="submit" buttonType="confirm">
            Create
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateAd;
