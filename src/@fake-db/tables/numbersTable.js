import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    id: 1,
    campaign: 'Plumbing',
    avatar: '1.jpg',
    full_name: 'Mike Jones',
    email: 'mike.j@unikmediagroup.com',
    number: '(800) 831-4545',
    number_allocated: 'Aug 14, 2021',
    number_renewal_date: 'Sep 14, 2021',
    status: 1
  },
  {
    responsive_id: '',
    id: 2,
    campaign: '',
    avatar: '',
    full_name: '',
    email: '',
    number: '(855) 213-8661',
    number_allocated: 'Aug 18, 2021',
    number_renewal_date: 'Sep 18, 2021',
    status:3
  },
  {
    responsive_id: '',
    id: 3,
    campaign: 'DUA Flight',
    avatar: '3.jpg',
    full_name: 'Kimberly Brown',
    email: 'kimmy.b@leadjar.io',
    number: '(866) 557-4338',
    number_allocated: 'Aug 23, 2021',
    number_renewal_date: 'Sep 23, 2021',
    status: 2
  }
]

mock.onGet('/api/numbersTable/initial-data').reply((config) => {
  return [200, data]
})

mock.onGet('/api/numbersTable/data').reply((config) => {
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
