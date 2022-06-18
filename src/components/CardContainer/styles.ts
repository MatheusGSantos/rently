import styled, { css } from 'styled-components';
import { CardContainerProps } from '.';

interface ContainerProps extends Omit<CardContainerProps, 'content' | 'loading'| 'showTrashCan'| 'deleteCallBack'> {
  areas: string;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  width: 100%;
  height: 100%;
  ${(props) => css`
    grid-template-columns: repeat(${props.columns}, 1fr);
    grid-gap: ${props.gap};
    grid-template-rows: repeat(${props.rows}, 1fr);
    grid-template-areas: ${props.areas};
  `}
`;
