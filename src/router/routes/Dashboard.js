import { lazy } from "react"

const DashboardRoutes = [
  // Dashboard
  {
    path: "/dashboard",
    component: lazy(() => import("../../views/dashboard")),
    meta: {
      action: 'read',
      resource: 'ACL'
    }
  }
]

export default DashboardRoutes
