import mock from './mock'
import './tables/datatables'
import './tables/disputesTable'
import './tables/numbersTable'
import './tables/blockedNumbersTable'
import './tables/purchaseNumberTable'
import './autoComplete/autoComplete'
import './navbar/navbarSearch'
import './apps/campaignList'
import './apps/email'
import './apps/chat'
import './apps/todo'
import './apps/calendar'
import './apps/userList'
import './apps/leadList'
import './apps/disputes'
import './apps/numbers'
import './apps/purchaseNumber'
import './apps/blockedNumbers'
import './apps/invoice'
import './apps/eCommerce'
import './pages/account-settings'
import './pages/profile'
import './pages/faq'
import './pages/knowledge-base'
import './pages/blog-data'
import './cards/card-analytics'
import './cards/card-statistics'
import './jwt'

mock.onAny().passThrough()
