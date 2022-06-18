import React, { useEffect } from 'react';
import { IResultsFromSearchDTO } from '../../services/dtos';
import Card from '../Card';
import { Container } from './styles';

export interface CardContainerProps {
  columns: number;
  rows: number;
  gap: string;
  loading: boolean;
  content: IResultsFromSearchDTO;
  showTrashCan?: boolean;
  deleteCallBack?: (params: Record<string, any> | undefined) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  columns,
  content,
  gap,
  loading,
  showTrashCan,
  deleteCallBack,
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
            loading={loading}
            id={item.id}
            key={item.id}
            image={item.image}
            price={item.price}
            ObjectName={item.ObjectName}
            OwnerName={item.OwnerName}
            owner_id={item.owner_id}
            category={item.category}
            email={item.email}
            style={{ gridArea: `area-${index}` }}
            showTrashCan={showTrashCan}
            deleteCallBack={deleteCallBack}
          />
        );
      })}
    </Container>
  );
};

export default CardContainer;
