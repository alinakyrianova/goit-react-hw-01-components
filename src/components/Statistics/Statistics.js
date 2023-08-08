import {
  StatContainer,
  Title,
  StatList,
  Item,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatElement = ({ id, label, percentage }) => (
  <Item key={id} label={label} style={{backgroundColor: getRandomHexColor()}}>
    <StatLabel>{label}</StatLabel>
    <StatPercentage>{percentage}%</StatPercentage>
  </Item>
);
    
export const Statistics = ({ title, stats }) => {
  return (
    <StatContainer>
      {title && <Title>{title}</Title>}
      <StatList>{stats.map(StatElement)}</StatList>
    </StatContainer>
  );
};