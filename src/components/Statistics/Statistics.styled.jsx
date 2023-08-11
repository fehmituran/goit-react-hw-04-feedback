import styled from "styled-components";
import { css } from "styled-components"

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatisticsItem = styled.li`
width: 280px;
font-size: 20px;
padding: 20px 10px;
border-radius: 5px;
color: #262c37;
background: #fff;
letter-spacing: 2px;
`;

const dynamicStyle = props =>
  css`
    color: ${props.color};
  `

export const Options = styled.span`

  ${dynamicStyle};
  
  font-weight: bold;
 
`;