import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '../features/AuthPages/LoginPage'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

