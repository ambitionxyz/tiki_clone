import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { AppstoreOutlined, CommentOutlined, HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { Header, Search } from './styled';
import AuthLayout from '../authCart/authCart';
import Navbar from './component.navbar';
import { IMG_FREESHIP, LOGO_TIKI } from '../../../assets/imgs/layout/index';

function HeaderLayout() {
  const { t } = useTranslation(['header', 'register', 'common']);

  return (
    <Header>
      <Row className='header_layout'>
        <Col span={22} offset={1}>
          <Row className='header_layout-content'>
            {/* Logo */}
            <Col md={5} sm={4} xs={6}>
              <Link to='/'>
                <Row className='header_layout-img'>
                  <img className='layout_img-selector' src={LOGO_TIKI} alt='Tiki' />
                </Row>
              </Link>
              <Row className='header_layout-img'>
                <img className='layout_img-selector mt-10' src={IMG_FREESHIP} alt='Freeship' />
              </Row>
            </Col>

            {/* Search */}
            <Col md={12} sm={20} xs={17}>
              <Search className='search'>
                <Input className='search_input' placeholder={t('title_input_search_header')} />
                <Button className='search_btn'>
                  <SearchOutlined />
                  {t('search')}
                </Button>
              </Search>
            </Col>

            {/* AuthCart */}
            <Col md={7}>
              <AuthLayout />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Nav */}
      <Row className='header_layout-nav'>
        <Col span={22} offset={1}>
          <Row>
            <Col span={6}>
              <Navbar t={t} linkTo={'/'} icon={<HomeOutlined />} nameNav={'common:home'} />
            </Col>
            <Col span={6}>
              <Navbar t={t} linkTo={'/'} icon={<AppstoreOutlined />} nameNav={'header:category'} />
            </Col>
            <Col span={6}>
              <Navbar t={t} linkTo={'/'} icon={<CommentOutlined />} nameNav={'header:chat'} />
            </Col>
            <Col span={6}>
              <Navbar t={t} linkTo={'/'} icon={<UserOutlined />} nameNav={'header:personal'} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderLayout;
