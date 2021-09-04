import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    id: 1,
    avatar: '1.jpg',
    full_name: 'Mike Jones',
    email: 'mike.j@unikmediagroup.com',
    number: '+12175439958',
    blocked_date: 'Aug 14, 2021',
    status: 1
  },
  {
    responsive_id: '',
    id: 2,
    avatar: '1.jpg',
    full_name: 'Mike Jones',
    email: 'mike.j@unikmediagroup.com',
    number: '+14152086433',
    blocked_date: 'Aug 18, 2021',
    status: 1
  },
  {
    responsive_id: '',
    id: 3,
    avatar: '6.jpg',
    full_name: 'Kelly Smith',
    email: 'kelly.s@unikmediagroup.com',
    number: '+445355348463',
    blocked_date: 'Aug 23, 2021',
    status: 1
  }
]

mock.onGet('/api/blockedNumbersTable/initial-data').reply((config) => {
  return [200, data]
})

mock.onGet('/api/blockedNumbersTable/data').reply((config) => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    (item) =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.campaign.toLowerCase().includes(queryLowered) ||
      item.full_name.toLowerCase().includes(queryLowered) ||
      item.account.toLowerCase().includes(queryLowered) ||
      item.email.toLowerCase().includes(queryLowered) ||
      item.created_date.toLowerCase().includes(queryLowered)
  )
  /* eslint-enable  */

  return [
    200,
    {
      allData: data,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})
