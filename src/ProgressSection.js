/** @jsx jsx */
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core';
import { H1, H2, Text, Container } from '@cdssnc/repertoire';
import { requiredScore } from './constants';
import { allWords } from './data/words';

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
      <Container marginBottom={[3, null, 5]}>
        <H1>Progress in {section}</H1>
        <H2 marginTop={[3, null, 4]}>Words learned</H2>
        <Text>{wordsLearned.join(', ')}</Text>
        <H2 marginTop={[3, null, 4]}>Words not learned</H2>
        <Text>{wordsNotLearned.join(', ')}</Text>
      </Container>

      <Link
        to="/progress"
        css={css`
          font-size: 20pt;
        `}
      >
        Back
      </Link>
    </Container>
  );
};
