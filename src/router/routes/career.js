import MainLayout from '@/components/layout/MainLayout'

export default [
  {
    path: '/karir',
    name: 'career.index',
    component: () => import('@/views/career/IndexView'),
    meta: {
      layout: MainLayout
    }
  }
]