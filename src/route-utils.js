import React, { lazy, Suspense } from 'react';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About/About';
// import ContactUs from './pages/About/ContactUs';
// import CompanyProfile from './pages/About/CompanyProfile';
import Main from './pages/Main'

const ContactUs = lazy(() => import('./pages/About/ContactUs'));
const CompanyProfile = lazy(() => import('./pages/About/CompanyProfile'));


const Registration = lazy(() => import('./pages/Registration/Registration'));

export const routes = [
  {
    path: '/login',
    component: Login,
    isGuarded: false,
  },
  {
    path: '/',
    component: Main,
    isGuarded: true,
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/registration',
        component: () => (
          <Suspense fallback={<div>Loading...</div>}>
            <Registration />
          </Suspense>
        )
      },
      {
        path: '/about',
        component: About,
        routes: [
          {
            path: '/about/company-profile',
            // component: CompanyProfile,
            component: () => (
              <Suspense fallback={<div>Loading...</div>}>
                <CompanyProfile />
              </Suspense>
            )
          },
          {
            path: '/about/contact-us',
            // component: ContactUs,
            component: () => (
              <Suspense fallback={<div>Loading...</div>}>
                <ContactUs />
              </Suspense>
            )
          },
        ]
      },
    ]
  },
];