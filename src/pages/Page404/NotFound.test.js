import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import fetchMock from 'fetch-mock';
import CardBlog from '../../components/CardBlog';

// https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md

afterEach(() => {
  fetchMock.restore();
  cleanup()
});

describe('CardBlog', () => {
  const renderApp = () => render(<CardBlog />);

  test('should render content ...', () => {
    renderApp();
    // let { getByTestId, queryByTestId, getByText } = renderApp();
    // screen.debug();
    // screen.container.querySelectorAll('.container') or screen.debug.querySelector('.container');
    // screen.getByText('CardBlog');
    // const el = screen.getByText('CardBlog');
    // expect(el.parentNode).toHaveStyle('display: block');
    // expect(el.parentNode).not.toHaveStyle('display: block');
    // expect(screen.container).toHaveTextContent('CardBlog');
    // const li = screen.container.querySelector('li');
    // console.log(prettyDOM(li));
  });
  
  test('should clicking ....', () => {
    renderApp();
    // let { getByTestId, queryByTestId, getByText } = renderApp();
    // const mockHandler = jest.fn();
    // const button = screen.getByText('CardBlog');
    // fireEvent.click(button);
    // expect(mockHandler.mock.calls).toHaveLength(1);
    // expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});


