import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

import MainLayout from '../layout/MainLayout'
import ErrorPage from '../layout/error-page'

const DragAndDropMap = lazy(() => import('@/pages/Projects/DragAndDropMap/DragAndDropMap'))

export const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <DragAndDropMap />
        },
      ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])
}
