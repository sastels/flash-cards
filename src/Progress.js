/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { Fragment, Component } from 'react';
import { Button, Container, Text, H1, CenterContent } from '@cdssnc/repertoire';
import { allWords } from './data/words';
import { requiredScore } from './constants';

const tableCellStyle = css`
  padding: 0 15px 0 15px;
  text-align: center;
`;

const tableHeaderCellStyle = css`
  padding: 10px 15px 10px 15px;
  text-align: center;
`;

// const tableCellStyle = css``;

const tableStyle = css`
  margin-left: auto;
  margin-right: auto;
`;

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
        <CenterContent marginTop={[5, null, 6]}>
          <H1 fontSize={[6, null, 6]} textAlign="center">
            Progress
          </H1>
        </CenterContent>

        <table css={tableStyle}>
          <tbody>
            <tr>
              <th css={tableHeaderCellStyle}>
                <Text fontSize="20pt" fontWeight="bold">
                  Section
                </Text>
              </th>
              <th css={tableHeaderCellStyle}>
                <Text fontSize="20pt" fontWeight="bold">
                  Words learned
                </Text>
              </th>
            </tr>

            {wordSetNames.map(name => (
              <Fragment key={name}>
                <tr>
                  <td css={tableCellStyle}>
                    <Link
                      to={`/progress/${name}`}
                      css={css`
                        font-size: 20pt;
                      `}
                    >
                      {name}
                    </Link>
                  </td>
                  <td css={tableCellStyle}>
                    <Text fontSize="20pt">
                      {scores[name]} / {allWords[name].length}
                    </Text>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>

        <Container textAlign="center" marginTop={[4, null, 5]}>
          <Text fontSize={[2, null, 3]}>
            A word is &quot;learned&quot; if the child knows it {requiredScore}{' '}
            times.
          </Text>
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
            backgroundColor="darkred"
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
