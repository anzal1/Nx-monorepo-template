import { render } from '@testing-library/react';

import UI-Testomponents from './ui-test-components';

describe('UI-Testomponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UI-Testomponents />);
    expect(baseElement).toBeTruthy();
  });
});
