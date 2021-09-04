import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    id: 1,
    category_name: 'Plumbing',
    business: "Lee's Plumbing",
    avatar: '1.jpg',
    full_name: 'Mike Jones',
    account: 'User',
    email: 'mike.j@gmail.com',
    created_date: '01/21/2021',
    lead_sold_date: '01/02/2021',
    lead_price: '$55.00',
    status: 1
  },
  {
    responsive_id: '',
    id: 2,
    category_name: 'Fences',
    business: 'Fence Masters',
    avatar: '2.jpg',
    full_name: 'Kimmy Brown',
    account: 'User',
    email: 'kimmy.b@gmail.com',
    created_date: '01/21/2021',
    lead_sold_date: '01/02/2021',
    lead_price: '$55.00',
    status: 1
  },
  {
    responsive_id: '',
    id: 3,
    category_name: 'Fences',
    business: 'Fence Masters',
    avatar: '2.jpg',
    full_name: 'Kimmy Brown',
    account: 'User',
    email: 'kimmy.b@gmail.com',
    created_date: '01/21/2021',
    lead_sold_date: '01/02/2021',
    lead_price: '$55.00',
    status: 2
  },
  {
    responsive_id: '',
    id: 4,
    category_name: 'Fences',
    business: 'Fence Masters',
    avatar: '2.jpg',
    full_name: 'Kimmy Brown',
    account: 'User',
    email: 'kimmy.b@gmail.com',
    created_date: '01/21/2021',
    lead_sold_date: '01/02/2021',
    lead_price: '$55.00',
    status: 3
  }
]

mock.onGet('/api/disputesTable/initial-data').reply((config) => {
  return [200, data]
})

mock.onGet('/api/disputesTable/data').reply((config) => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    (item) =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.category_name.toLowerCase().includes(queryLowered) ||
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
