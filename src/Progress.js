/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment, Component } from 'react';
import { Button, Container, Text, H1, CenterContent } from '@cdssnc/repertoire';
import { allWords } from './data/words';
import { requiredScore } from './constants';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordSetNames: [],
      scores: {}
    };
  }

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

  resetScores = () => {
    const { wordSetNames } = this.state;
    localStorage.flashCardScores = JSON.stringify({});
    const scores = {};
    wordSetNames.forEach(wordSet => {
      scores[wordSet] = 0;
    });
    this.setState({ scores });
  };

  render() {
    const { wordSetNames, scores } = this.state;
    const { history } = this.props;
    return (
      <Container width="100%">
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

        <div
          css={css`
            margin: auto;
            width: 75px;
          `}
        >
          <Button
            width="100%"
            marginTop={[6, 7, 7]}
            onClick={() => {
              history.push('/');
            }}
          >
            Home
          </Button>

          <Button
            backgroundColor="blue"
            width="100%"
            marginTop={[6, 7, 7]}
            onClick={() => {
              this.resetScores();
            }}
          >
            Reset
          </Button>
        </div>
      </Container>
    );
  }
}

export default Progress;
