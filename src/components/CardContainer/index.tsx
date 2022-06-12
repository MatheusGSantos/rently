import React, { useEffect } from 'react';
import Card, { ICardProps } from '../Card';
import { Container } from './styles';

export interface CardContainerProps {
  columns: number;
  rows: number;
  gap: string;
  content: ICardProps[];
}

const CardContainer: React.FC<CardContainerProps> = ({
  columns,
  content,
  gap,
  rows,
}) => {
  const [areas, setAreas] = React.useState<string>('');

  useEffect(() => {
    setAreas(() => {
      const areaNumbers = [];
      for (let i = 0; i < columns * rows; i++) {
        areaNumbers.push(`area-${i}`);
      }
      const aux = [];
      for (let i = 0; i < rows; i++) {
        aux.push(areaNumbers.slice(i * columns, (i + 1) * columns).join(' '));
      }

      const formattedString = `"${aux.join('" "')}"`;

      return formattedString;
    });
  }, [columns, rows]);

  return (
    <Container columns={columns} gap={gap} rows={rows} areas={areas}>
      {content.map((item, index) => {
        return (
          <Card
            description={item.description}
            id={item.id}
            key={item.id}
            image={item.image}
            price={item.price}
            seller={item.seller}
            title={item.title}
            style={{ gridArea: `area-${index}` }}
          />
        );
      })}
    </Container>
  );
};

export default CardContainer;
