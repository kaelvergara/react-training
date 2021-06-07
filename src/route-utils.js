import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About/About';
import CompanyProfile from './pages/About/CompanyProfile';
import ContactUs from './pages/About/ContactUs';
import Main from './pages/Main'

export const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Main,
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/about',
        component: About,
        routes: [
          {
            path: '/about/company-profile',
            component: CompanyProfile
          },
          {
            path: '/about/contact-us',
            component: ContactUs
          },
        ]
      },
    ]
  },
];