import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 415px;
  box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  padding: 25px 25px;
  flex: 1;
  max-width: 25%;
  margin: 25px 25px 25px 0;
  background: #fff;
  flex-direction: column;

  &:last-child {
    margin-right: 0;
  }

  img {
    max-height: 38px;
    max-width: 100%;
  }
`;

export const Rate = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  color: #1f2d30;
  margin-top: 15px;
  display: flex;
  align-items: center;
`;

export const Separator = styled.div`
  width: 100%;
  height: 3px;
  background: #eeefef;
  margin: 15px 0 15px;
`;

export const UniversityName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #1f2d30;
  margin-top: 25px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const CourseName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #007a8d;
  margin-top: 5px;
`;

export const CourseKindAndShift = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: #1f2d30;
  text-transform: uppercase;
  margin-top: 0px;
`;

export const CourseStartDate = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  color: #1f2d30;
  margin-bottom: 5px;
  margin-top: 15px;
`;
export const TitleMonthlyFee = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1f2d30;
  margin-top: 0px;
`;
export const OldPrice = styled.div`
  font-size: 0.75rem;
  font-weight: 300;
  color: #1f2d30;
  margin-top: 15px;
  text-decoration: line-through;
`;
export const Price = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #278637;
  margin-top: 0px;
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 20px;
`;
export const ButtonExclude = styled.button`
  font-size: 0.875rem;
  padding: 5px 20px;
  font-weight: 600;
  border-radius: 3px;
  background: #fff;
  color: #007a8d;
  border: 1px solid #007a8d;
  cursor: pointer;
  letter-spacing: 0.5px;
`;
export const ButtonShowOffer = styled.button`
  font-size: 0.875rem;
  padding: 5px 25px;
  letter-spacing: 0.5px;
  font-weight: 600;
  border-radius: 3px;
  margin-left: 10px;
  background: ${props => (props.disabled ? '#CACDCE' : '#FDCB13')};
  color: ${props => (props.disabled ? '#83898B' : '#1F2D30')};
  border: 1px solid ${props => (props.disabled ? '#B5B9BA' : '#DE9E1F')};
  ${props =>
    props.disabled
      ? 'cursor:not-allowed;pointer-evetns:none;'
      : 'cursor:pointer;'}
  &:hover {
    background: ${props =>
      props.disabled ? '#CACDCE' : lighten(0.2, '#FDCB13')};
  }
`;

export const UnavailableText = styled.div`
  font-size: 0.75rem;
  color: #1f2d30;
  line-height: 1.25rem;
  margin-top: 10px;
`;
