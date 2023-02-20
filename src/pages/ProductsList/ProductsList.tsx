type Props = {
  category: string;
};
export const ProductsList:React.FC<Props> = ({ category }) => {
  return (
    <div>{category}</div>
  );
};
