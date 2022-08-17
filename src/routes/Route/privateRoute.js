import DashboardScreen from '../../layouts/dashboard.layout';
import Cart from '../../modules/cart/Cart.module';
import Profile from '../../modules/profile/Profile.module';
import ChangePassword from '../../modules/auth/changePassword/changePassword.screeen';
import Info from '../../modules/profile/components/info/Info.component';

const privateRoute = [
  {
    element: <DashboardScreen />,
    children: [
      {
        path: '/account/profile',
        element: (
          <Profile>
            <Info />
          </Profile>
        ),
      },
      {
        path: '/account/change-password',
        element: (
          <Profile>
            <ChangePassword />
          </Profile>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
];

export default privateRoute;
