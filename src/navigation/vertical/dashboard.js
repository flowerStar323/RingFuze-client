import { Home } from "react-feather"

export default [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Home size={20} />,
    action: 'read',
    resource: 'ACL',
    navLink: "/dashboard"
  }
]
