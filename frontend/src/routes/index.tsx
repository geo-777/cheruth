import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../features/landingPage/LandingPage'

export const Route = createFileRoute('/')({
  component: LandingPage,
})


