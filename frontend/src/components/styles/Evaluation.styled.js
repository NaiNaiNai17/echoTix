import styled from 'styled-components/macro';

export const EvaluationContainer = styled.div.attrs(() => ({
  className: 'EvaluationContainer',
}))`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 80%;
  padding: 50px;
  background: rgb(216, 243, 218);
  background: linear-gradient(
    0deg,
    rgba(216, 243, 218, 1) 33%,
    rgba(7, 28, 49, 1) 100%
  );
`;

export const EvaluationInfoContainer = styled.div.attrs(() => ({
  className: 'EvaluationInfoContainer',
}))`
  padding: 40px;
  background-color: #c4c4c4;
  height: 40vh;
  display: flex;
  align-item: center;
  margin-bottom: 20px;
`;

export const EvaluationHeaderBoxes = styled.button.attrs(() => ({
  className: 'EvaluationHeaderBoxes',
}))`
  padding: 40px;
  background-color: #c4c4c4;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
