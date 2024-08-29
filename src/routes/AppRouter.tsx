import { Navigate, useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import MainLayout from '../layout/MainLayout'
import ErrorPage from '../layout/error-page'

const HomePage = lazy(() => import('@/pages/Home'))
//eslint-disable-next-line
const withCondition = (Component: any, redirectTo: string) => {
  //eslint-disable-next-line
  return function InnerComponent(props: any) {
    const condition = localStorage.getItem('user')
    return condition ? (
      <Suspense>
        <Component {...props} />
      </Suspense>
    ) : (
      <Navigate to={redirectTo} />
    )
  }
}

const withLoggedIn = (Component: any): any => withCondition(Component, '/login') //eslint-disable-line

export const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: withLoggedIn(HomePage)()
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])
}
