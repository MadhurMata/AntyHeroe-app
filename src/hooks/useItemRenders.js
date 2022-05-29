import { useRef } from 'react';

export const useItemRenders = () => {
  const renders = useRef(0);
  console.log('renders', renders);
};
