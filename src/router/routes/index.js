// ** Routes Imports
import AuthRoutes from './Auth'
import DashboardRoutes from './Dashboard'
import SiteRoutes from './Site'
import ManageRoutes from './Manage'
import SettingsRoutes from './Settings'
import Misc from './Misc'

// ** Document title
const TemplateTitle = '%s - RingFuze'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  ...AuthRoutes,
  ...DashboardRoutes,
  ...SiteRoutes,
  ...ManageRoutes,
  ...SettingsRoutes,
  ...Misc
]

export { DefaultRoute, TemplateTitle, Routes }
