import { createFileRoute, redirect } from '@tanstack/react-router'
import LandingPage from '../features/landingPage/LandingPage'
import { ACCESS_TOKEN } from '../api/authHelpers'

export const Route = createFileRoute('/')({
  beforeLoad: () =>{
    const token = localStorage.getItem(ACCESS_TOKEN);

    if(token) {
      throw redirect({ to:'/dashboard' });
    }
  },
  component: LandingPage,
})


