import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UI-TestomponentsProps {}

const StyledUI-Testomponents = styled.div`
  color: pink;
`;

export function UI-Testomponents(props: UI-TestomponentsProps) {
  return (
    <StyledUI-Testomponents>
      <h1>Welcome to UI-Testomponents!</h1>
    </StyledUI-Testomponents>
  );
}

export default UI-Testomponents;
