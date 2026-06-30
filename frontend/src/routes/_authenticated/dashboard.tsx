import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../../features/ProtectedPages/DashboardPage/Dashboard'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
})

