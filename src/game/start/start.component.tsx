import type { FC } from 'react';

import * as Styled from './start.styles';

const Start: FC = () => {
  return (
    <Styled.Start>
      <Styled.Title>Pipe Hero</Styled.Title>

      <Styled.Prompt>Press any Key to Start!</Styled.Prompt>
    </Styled.Start>
  );
};

export default Start;
