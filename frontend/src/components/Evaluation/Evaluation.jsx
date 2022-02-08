import React from 'react';

import GeneralEvaluation from './GeneralEvaluation';
import FinancialEvaluation from './FinancialEvaluation';

import {
  EvaluationContainer,
  EvaluationInfoContainer,
} from '../../components/styles/Evaluation.styled';

import { EvaluationHeaderBoxes } from '../styles/HeadlineBoxes/EvaluationHeaderBoxes.styled';

const Evaluation = () => {
  return (
    <EvaluationContainer>
      <EvaluationHeaderBoxes>General Evaluation</EvaluationHeaderBoxes>
      <EvaluationInfoContainer>
        <GeneralEvaluation />
      </EvaluationInfoContainer>
      <EvaluationHeaderBoxes>Financial Evaluation</EvaluationHeaderBoxes>
      <EvaluationInfoContainer>
        <FinancialEvaluation />
      </EvaluationInfoContainer>
    </EvaluationContainer>
  );
};

export default Evaluation;
