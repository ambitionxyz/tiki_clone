import styled from 'styled-components';
import COLORS from '../../themes/colors';

export const Footer = styled.div`
  widht: 100%;
  display: flex;
  margin-top: 20px;
  background-color: #fff;

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  .border_right {
    border-right: 1px solid ${COLORS.primary};
  }

  .footer_col {
    margin-right: 10px;
    padding: 20px 50px;

    .content_footer {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .footer-img-pay {
      margin-right: 10px;
    }

    .footer_row-1 {
      color: #808089;
    }

    .content_sub {
      margin-bottom: 5px;
      color: #808089;

      .phone_support {
        color: #000;

        &:hover {
          color: ${COLORS.primary};
        }
      }

      &:hover {
        color: ${COLORS.primary};
      }
    }
  }
`;
