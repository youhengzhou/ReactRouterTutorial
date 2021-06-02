import React from 'react';
import { useLocation } from 'react-router-dom';
import Beluga from './Beluga';
import Blue from './Blue';

export default function Whale() {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];

  return (
    <>
      <h2>Whale</h2>
      {type === 'beluga' && <Beluga />}
      {type === 'blue' && <Blue />}
    </>
  );
}