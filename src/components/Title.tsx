import { memo } from 'react';
import { TitleType } from '../types/title';

export const Title = memo((props: TitleType) => {
  const { title } = props;
  return (
    <h1>{title}</h1>
  )
});