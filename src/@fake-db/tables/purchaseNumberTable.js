import mock from '../mock'
import { paginateArray } from '../utils'

const data = [
  {
    responsive_id: '',
    id: 1,
    number: '(800) 831-4545',
    type: 'Toll-Free',
    monthly_fee: '$3.00'
  },
  {
    responsive_id: '',
    id: 2,
    number: '(855) 686-0863',
    type: 'Toll-Free',
    monthly_fee: '$3.00'
  },
  {
    responsive_id: '',
    id: 3,
    number: '(844) 278-1586',
    type: 'Toll-Free',
    monthly_fee: '$3.00'
  },
  {
    responsive_id: '',
    id: 4,
    number: '(844) 648-7734',
    type: 'Toll-Free',
    monthly_fee: '$3.00'
  },
  {
    responsive_id: '',
    id: 5,
    number: '(844) 709-0921',
    type: 'Toll-Free',
    monthly_fee: '$3.00'
  },
  {
    responsive_id: '',
    id: 6,
    number: '(719) 425-2927',
    type: 'Local',
    monthly_fee: '$2.00'
  },
  {
    responsive_id: '',
    id: 7,
    number: '(209) 888-0480',
    type: 'Local',
    monthly_fee: '$2.00'
  },
  {
    responsive_id: '',
    id: 8,
    number: '(561) 220-0822',
    type: 'Local',
    monthly_fee: '$2.00'
  },
  {
    responsive_id: '',
    id: 9,
    number: '(970) 644-6552',
    type: 'Local',
    monthly_fee: '$2.00'
  },
  {
    responsive_id: '',
    id: 10,
    number: '(502) 892-0827',
    type: 'Local',
    monthly_fee: '$2.00'
  }
]

mock.onGet('/api/purchaseNumberTable/initial-data').reply((config) => {
  return [200, data]
})

mock.onGet('/api/purchaseNumberTable/data').reply((config) => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1 } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.filter(
    (item) =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      item.number.toLowerCase().includes(queryLowered) ||
      item.type.toLowerCase().includes(queryLowered) ||
      item.monthly_fee.toLowerCase().includes(queryLowered)
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
