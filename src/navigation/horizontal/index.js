// ** Menu Imports
import dashboard from "./dashboard"
import site from "./site"
import manage from "./manage"
import settings from "./settings"

// ** Merge & Export
export default [
  ...dashboard,
  ...site,
  ...manage,
  ...settings
]
