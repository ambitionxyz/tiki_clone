import { ShoppingCartOutlined } from '@ant-design/icons';
import { Col, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useProductStore } from '../../../hooks/useProductDetail';

function CartLayout() {
  const { t } = useTranslation(['header', 'register']);

  const { quantityCart } = useProductStore();

  return (
    <Link to='/cart' className='cart'>
      <Col className='cart_items'>
        <ShoppingCartOutlined />
        <Col>
          <Typography className='title_cart cart_quantily'>{quantityCart}</Typography>
        </Col>
      </Col>
    </Link>
  );
}

export default CartLayout;
