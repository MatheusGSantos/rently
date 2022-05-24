import React, { ButtonHTMLAttributes } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container } from './styles';

enum EButtonTypes {
  'primary',
  'danger',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  buttonType?: keyof typeof EButtonTypes;
  rounded?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  buttonType,
  ...rest
}) =>
  loading ? (
    <Skeleton baseColor="#ECE9F4" highlightColor="#F1EFF8" />
  ) : (
    <Container type="button" bgColor={buttonType} {...rest}>
      {children}
    </Container>
  );

export default Button;
