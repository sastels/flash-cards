/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { H1, H2, Text, Container, CenterContent } from '@cdssnc/repertoire';
import { requiredScore } from './constants';
import { allWords } from './data/words';

const center = css`
  margin: auto;
  display: flex;
  width: 1px;
  font-size: 20px;
  justify-content: center;
  margin-top: 50px;
`;

// eslint-disable-next-line import/prefer-default-export
export const ProgressSection = props => {
  const {
    match: { params }
  } = props;
  const { section } = params;

  if (Object.keys(allWords).indexOf(section) === -1) {
    return <H1>Bad url</H1>;
  }
  const wordScores = localStorage.flashCardScores
    ? JSON.parse(localStorage.flashCardScores)
    : {};

  const wordsLearned = allWords[section].filter(
    word => wordScores[word] >= requiredScore
  );
  const wordsNotLearned = allWords[section].filter(
    word => wordScores[word] < requiredScore || !wordScores[word]
  );

  return (
    <Container margin={[3, null, 4]}>
      <H1 fontSize={[6, null, 7]} textAlign="center">
        {section}
      </H1>

      <CenterContent maxWidth="350px">
        <H2 textAlign="center" marginTop={[4, null, 5]}>
          Words learned
        </H2>

        <Text fontSize={[3, null, 4]}>{wordsLearned.join(', ')}</Text>

        <H2 textAlign="center" marginTop={[4, null, 5]}>
          Words not learned
        </H2>
        <Text fontSize={[3, null, 4]}>{wordsNotLearned.join(', ')}</Text>

        <Container marginTop={[3, null, 4]}>
          <Link to="/progress" css={center}>
            Back
          </Link>
        </Container>
      </CenterContent>
    </Container>
  );
};
