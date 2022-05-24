import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import React, { useRef } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container } from './styles';

interface FormData {
  test: string;
}

const Home: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const formRef = useRef<FormHandles>(null);
  const toggleLoading = (): void => setLoading(!loading);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <Container>
      {/* <button type="button" onClick={toggleLoading}>
        toggle loading
      </button>
      <Button loading={loading}>Home</Button>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="test" placeholder="test" loading={loading} />
        <Button type="submit">Submit</Button>
      </Form> */}
    </Container>
  );
};

export default Home;
