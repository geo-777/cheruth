import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { ACCESS_TOKEN } from '../api/authHelpers'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async () => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (!token) {
      throw redirect({ to: '/login' })
    }
  },
  component: () => <Outlet />,
})

