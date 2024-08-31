import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

import MainLayout from '../layout/MainLayout'
import ErrorPage from '../layout/error-page'

const HomePage = lazy(() => import('@/pages/Home'))

export const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])
}
