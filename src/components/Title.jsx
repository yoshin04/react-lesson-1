import { memo } from 'react';

export const Title = memo((props) => {
  const { title } = props;
  return (
    <h1>{title}</h1>
  )
});