import React from 'react';
import Notification from './Notification';
import styles from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const hasFeedback = total > 0;

  return (
    <div className={styles.statisticsContainer}>
      {hasFeedback ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total Feedback: {total}</p>
          <p>Positive Feedback Percentage: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Statistics;
