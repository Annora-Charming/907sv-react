import Item from './Item';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
const t = "Hi, i'm title";
const id = 'key element';
const clickHandler = jest.fn();

test('Showing title', () => {
  render(<Item title={t} />);
  const expected_title = screen.getByText(t);
  expect(expected_title).toBeInTheDocument();
});

test('Processing button', () => {
  render(<Item id={id} clickHandler={clickHandler} />);
  const button = screen.getByTestId(id);
  expect(button).toBeInTheDocument();
  expect(clickHandler).not.toBeCalled();
  fireEvent.click(button);
  expect(clickHandler).toBeCalledWith(id);
});

test('Showing list items', () => {
  const v1 = 'first li';
  const v2 = 'second li';
  const v3 = 'third li';
  render(<Item v1={v1} v2={v2} v3={v3} />);
  expect(screen.getByText(v1)).toBeInTheDocument();
  expect(screen.getByText(v2)).toBeInTheDocument();
  expect(screen.getByText(v3)).toBeInTheDocument();
});
