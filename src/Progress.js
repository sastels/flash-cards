/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment, Component } from 'react';
import { Container, Text, H1, CenterContent } from '@cdssnc/repertoire';
import { allWords } from './data/words';
import { requiredScore } from './constants';

class Progress extends Component {
  state = {
    wordSetNames: [],
    scores: {}
  };

  componentDidMount() {
    const wordScores = localStorage.flashCardScores
      ? JSON.parse(localStorage.flashCardScores)
      : {};

    const wordSetNames = Object.keys(allWords);
    const scores = {};
    wordSetNames.forEach(name => {
      scores[name] = allWords[name].filter(
        word => wordScores[word] >= requiredScore
      ).length;
    });
    this.setState({ wordSetNames, scores });
  }

  render() {
    const { wordSetNames, scores } = this.state;
    return (
      <Container>
        <CenterContent mt={[1, 1, 6]}>
          <H1 textAlign="center">Progress</H1>
        </CenterContent>

        <Container maxWidth="500px" marginLeft={[3, 7, 7]} margin="0 auto">
          {wordSetNames.map(name => (
            <Fragment key={name}>
              <Text fontSize={[3, 4, 4]}>
                {name}: {scores[name]} / {allWords[name].length}{' '}
              </Text>
              <br />
            </Fragment>
          ))}
        </Container>
      </Container>
    );
  }
}

export default Progress;
