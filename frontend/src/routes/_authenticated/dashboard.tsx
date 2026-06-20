import { createFileRoute } from '@tanstack/react-router'
import { Dashboard } from '../../features/DashboardPage/Dashboard'

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
})

