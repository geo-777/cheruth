import { createFileRoute } from '@tanstack/react-router'
import { AllLinks } from '../../features/ProtectedPages/LinkPages/AllLinks'

export const Route = createFileRoute('/_authenticated/links')({
  component: AllLinks,
})

