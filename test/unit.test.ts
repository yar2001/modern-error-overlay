// src/__tests__/App.test.tsx
import { expect, test, it, describe } from 'vitest';
import { getByText } from '@testing-library/dom';
import { addErrorToOverlay, resetErrorOverlay } from '../src/index';
import { mockError, mockOverlay } from '../src/mock';
import { ErrorOverlayHtml } from '../src/components/overlay';
import { ErrorStatusHtml } from '../src/components/status';

describe('Library', () => {
  it('should work as expected', () => {
    resetErrorOverlay();

    addErrorToOverlay(mockError);
    expect(getByText(document.body, mockError.title)).toBeTruthy();

    document.querySelector<HTMLButtonElement>('#error-overlay-close-button')?.click();
    expect(document.getElementById('error-overlay')?.innerHTML).toMatchSnapshot();
  });

  it('mock should be available', () => {
    resetErrorOverlay();

    mockOverlay();
    expect(document.getElementById('error-overlay')?.innerHTML).toMatchSnapshot();

    resetErrorOverlay();
    expect(document.getElementById('error-overlay')?.innerHTML).toMatchSnapshot();
  });
});

describe('ErrorOverlayHtml', () => {
  it('should work as expected', () => {
    const result = ErrorOverlayHtml([mockError, mockError, mockError], 1);
    expect(result).toMatchSnapshot();
  });
});

describe('ErrorStatusHtml', () => {
  it('should work as expected', () => {
    const result = ErrorStatusHtml(3);
    expect(result).toMatchSnapshot();
  });
});
