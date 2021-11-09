import { memo } from 'react';

export const RadioForm = memo(() => {
  return (
    <>
      <input type="radio" name="radio_button" value="all" checked="checked" />すべて
      <input type="radio" name="radio_button" value="work" />作業中
      <input type="radio" name="radio_button" value="finish" />完了
    </>
  )
});