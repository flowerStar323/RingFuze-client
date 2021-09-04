import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  campaigns: [
    {
      id: 1,
      name: 'U65 Transfers',
      industry: 'insurance_health-insurance',
      totalCalls: '76',
      status: 'active'
    },
    {
      id: 2,
      name: 'U65 Inbounds',
      industry: 'insurance_health-insurance',
      totalCalls: '184',
      status: 'paused'
    },
    {
      id: 3,
      name: 'Medicare Transfers - MedSupp',
      industry: 'insurance_medicare',
      totalCalls: '629',
      status: 'active'
    },
    {
      id: 4,
      name: 'Auto Inbound 24/7',
      industry: 'insurance_auto-insurance',
      totalCalls: '213',
      status: 'archived'
    },
    {
      id: 5,
      name: 'Solar Inbound',
      industry: 'home-services_solar',
      totalCalls: '48',
      status: 'active'
    },
    {
      id: 6,
      name: 'Pest Control - CA Only',
      industry: 'home-services_pest-control',
      totalCalls: '356',
      status: 'active'
    },
    {
      id: 7,
      name: 'Pest Control - 247 Nationwide',
      industry: 'home-services_pest-control',
      totalCalls: '1,864',
      status: 'active'
    }
  ]
}

// GET ALL DATA
mock.onGet('/api/campaigns/list/all-data').reply(200, data.campaigns)

// GET Updated DATA
mock.onGet('/api/campaigns/list/data').reply(config => {
  const { q = '', perPage = 10, page = 1, industry = null, totalCalls = null, status = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.campaigns.filter(
    campaign =>
      (campaign.name.toLowerCase().includes(queryLowered) || campaign.name.toLowerCase().includes(queryLowered)) &&
      campaign.industry === (industry || campaign.industry) &&
      campaign.totalCalls === (totalCalls || campaign.totalCalls) &&
      campaign.status === (status || campaign.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      campaigns: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET CAMPAIGN
mock.onGet('/api/campaigns/campaign').reply(config => {
  const { id } = config
  const compaign = data.campaigns.find(i => i.id === id)
  return [200, { campaign }]
})
