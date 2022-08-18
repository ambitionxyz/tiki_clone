/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import { Button, Checkbox, Col, notification, Popconfirm, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { useAuthStore } from '../../../hooks/useAuth';
import { HadProducts, Payment } from './styled';
import ListProducts from './component/listProducts/ListProducts';
import AddressShippingComp from './component/addressShipping/AddressShipping';
import PromotionsComp from './component/promotions/promotions';
import ProvisionalCalculationComp from './component/provisionalCalculation/ProvisionalCalculation';

function HaveProducts() {
  const { t } = useTranslation(['cart']);

  const [orders, setOrders] = useState([
    {
      productId: '62f6127b01901acef6c257f1',
      discount: 0.3,
      img: 'https://salt.tikicdn.com/cache/100x100/ts/product/19/8a/e1/d937df8639ad937d4d01d46760d46072.png.webp',
      linkTo: '#',
      nameProducts: t('Combo 2 Thùng Bia Hà Nội'),
      price: 275000,
      quantity: 1,
      isCheck: false,
    },
    {
      productId: '62f613f101901acef6c25806',
      discount: 0.1,
      img: 'https://salt.tikicdn.com/cache/100x100/ts/product/eb/1e/9b/fa34fb7e0ae4da3e1ec9c3d4c4add39b.jpg.webp',
      linkTo: '#',
      nameProducts: t('Điện thoại Samsung Galaxy A13 (4GB/128GB)'),
      price: 5990000,
      quantity: 1,
      isCheck: false,
    },
  ]);

  const listOrdersCheckTrue = orders.filter((item) => item.isCheck === true);

  const listOrdersPost = listOrdersCheckTrue.map((item) => {
    return {
      productId: item.productId,
      quantity: item.quantity,
      discount: item.discount,
      price: item.price,
    };
  });

  const { orderPost } = useAuthStore();

  const total = useMemo(() => {
    const cloneOrders = orders?.filter((i) => i.isCheck);

    if (cloneOrders.length) {
      const totalOrdersPrice = cloneOrders.reduce((acumulator, item) => {
        const priceOfProducts = item.price * item.quantity - item.price * item.discount * item.quantity;

        return acumulator + priceOfProducts;
      }, 0);

      return totalOrdersPrice;
    }

    return 0;
  }, [orders]);

  const provisional = useMemo(() => {
    const cloneOrders = orders?.filter((i) => i.isCheck);

    if (cloneOrders.length) {
      const totalOrdersPrice = cloneOrders.reduce((acumulator, item) => {
        const priceOfProducts = item.price * item.quantity;

        return acumulator + priceOfProducts;
      }, 0);

      return totalOrdersPrice;
    }

    return 0;
  }, [orders]);

  const renderListOrders = () => {
    const List = [];

    orders.forEach((item, index) => {
      return List.push(
        <Row key={index} className='name_field'>
          <ListProducts
            productId={item.productId}
            discount={item.discount}
            img={item.img}
            linkTo={item.linkTo}
            nameProducts={item.nameProducts}
            price={item.price}
            setOrders={setOrders}
            orders={orders}
            isCheck={item.isCheck}
            quantity={item.quantity}
          />
        </Row>,
      );
    });

    return List;
  };

  const postOrderSuccess = async () => {
    await notification.success({
      message: 'Order Success',
    });
  };

  const postOrderFail = async () => {
    await notification.error({
      message: 'Order Fail',
    });
  };

  const buyProducts = () => {
    // orderPost({ orders: listOrdersPost }, postOrderSuccess, postOrderFail);
    console.log(listOrdersPost);
  };

  return (
    <HadProducts>
      <Col span={22} offset={1} className='cart'>
        <Row>
          <Col lg={17} sm={24}>
            <Row className='name_field navbar_cart'>
              <Col md={11}>
                <Checkbox className='icon_check' />
                {t('all_products')}
              </Col>
              <Col md={4}>{t('unit_price')}</Col>
              <Col md={4}>{t('quantity')}</Col>
              <Col md={4}>{t('into_money')}</Col>
              <Col md={1}>
                <Popconfirm title='Do you want to delete all?' okText='Yes' cancelText='No'>
                  <DeleteOutlined className='icon_delete' />
                </Popconfirm>
              </Col>
            </Row>
            {renderListOrders()}
          </Col>

          <Col lg={7} sm={24}>
            <Payment>
              <AddressShippingComp />
              <PromotionsComp />
              <ProvisionalCalculationComp memoPrice={total} memoProvisional={provisional} />
              <Row className='btn_buy'>
                <Col lg={24}>
                  <Button type='primary' onClick={buyProducts}>
                    {t('buy_products')}
                  </Button>
                </Col>
              </Row>
            </Payment>
          </Col>
        </Row>
      </Col>
    </HadProducts>
  );
}

export default HaveProducts;
