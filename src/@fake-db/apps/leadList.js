import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  leads: [
    {
      id: 1,
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      role: 'lead',
      campaign: 'health',
      username: 'gslixby0',
      country: 'El Salvador',
      lead: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'lead',
      username: 'hredmore1',
      country: 'Albania',
      lead: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      campaign: 'medicare',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      role: 'lead',
      username: 'msicely2',
      country: 'Russia',
      lead: '(321) 264-4599',
      email: 'msicely2@who.int',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
      role: 'lead',
      username: 'crisby3',
      country: 'China',
      lead: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      campaign: 'medicare',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'lead',
      username: 'mhurran4',
      country: 'Pakistan',
      lead: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      campaign: 'u65 health',
      disposition: 'notInterested',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'lead',
      username: 'shalstead5',
      country: 'China',
      lead: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      campaign: 'pest control',
      disposition: 'disputeWon',
      avatar: ''
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'lead',
      username: 'bgallemore6',
      country: 'Canada',
      lead: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      campaign: 'u65 health',
      disposition: 'notInterested',
      avatar: ''
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      role: 'lead',
      username: 'kliger7',
      country: 'France',
      lead: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      campaign: 'plumbing',
      disposition: 'callback',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      role: 'lead',
      username: 'fscotfurth8',
      country: 'China',
      lead: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
      role: 'lead',
      username: 'jbellany9',
      country: 'Jamaica',
      lead: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      campaign: 'pest control',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 11,
      fullName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
      role: 'lead',
      username: 'jwharltona',
      country: 'United States',
      lead: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      campaign: 'u65 health',
      disposition: 'callback',
      avatar: require('@src/assets/images/avatars/4.png').default
    },
    {
      id: 12,
      fullName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
      role: 'lead',
      username: 'shallamb',
      country: 'Peru',
      lead: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/5.png').default
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
      role: 'lead',
      username: 'ypottiec',
      country: 'Philippines',
      lead: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      campaign: 'u65 health',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/7.png').default
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      role: 'lead',
      username: 'mkraused',
      country: 'Democratic Republic of the Congo',
      lead: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      campaign: 'medicare',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
      role: 'lead',
      username: 'zmcclevertye',
      country: 'France',
      lead: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      campaign: 'plumbing',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      role: 'lead',
      username: 'bemblinf',
      country: 'Spain',
      lead: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      campaign: 'pest control',
      disposition: 'callback',
      avatar: require('@src/assets/images/avatars/6.png').default
    },
    {
      id: 17,
      fullName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
      role: 'lead',
      username: 'bmylesg',
      country: 'Poland',
      lead: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      campaign: 'medicare',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 18,
      fullName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      role: 'lead',
      username: 'bbinerh',
      country: 'Yemen',
      lead: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/7.png').default
    },
    {
      id: 19,
      fullName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
      role: 'lead',
      username: 'tbruntjeni',
      country: 'France',
      lead: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 20,
      fullName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      role: 'lead',
      username: 'wburlandj',
      country: 'Honduras',
      lead: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      campaign: 'u65 health',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/6.png').default
    },
    {
      id: 21,
      fullName: 'Selina Kyle',
      company: 'Wayne plumbings',
      role: 'lead',
      username: 'catwomen1940',
      country: 'USA',
      lead: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      campaign: 'u65 health',
      disposition: 'callback',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 22,
      fullName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      role: 'lead',
      username: 'jlysterl',
      country: 'Ukraine',
      lead: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/8.png').default
    },
    {
      id: 23,
      fullName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
      role: 'lead',
      username: 'kskitterelm',
      country: 'Poland',
      lead: '(254) 845-4107',
      email: 'kskitterelm@washingtonpost.com',
      campaign: 'medicare',
      disposition: 'disputeWon',
      avatar: require('@src/assets/images/avatars/3.png').default
    },
    {
      id: 24,
      fullName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      role: 'lead',
      username: 'chatherleighn',
      country: 'Brazil',
      lead: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      campaign: 'u65 health',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 25,
      fullName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      role: 'lead',
      username: 'amiccoo',
      country: 'France',
      lead: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 26,
      fullName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      role: 'lead',
      username: 'hhassonp',
      country: 'China',
      lead: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/4.png').default
    },
    {
      id: 27,
      fullName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      role: 'lead',
      username: 'gjacombsq',
      country: 'Zambia',
      lead: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 28,
      fullName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
      role: 'lead',
      username: 'bkildayr',
      country: 'Portugal',
      lead: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      campaign: 'medicare',
      disposition: 'callback',
      avatar: ''
    },
    {
      id: 29,
      fullName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
      role: 'lead',
      username: 'cpinyons',
      country: 'Sweden',
      lead: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      campaign: 'medicare',
      disposition: 'saleMade',
      avatar: require('@src/assets/images/avatars/7.png').default
    },
    {
      id: 30,
      fullName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      role: 'lead',
      username: 'imallindinet',
      country: 'Slovenia',
      lead: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 31,
      fullName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      role: 'lead',
      username: 'gmeinekenu',
      country: 'Moldova',
      lead: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 32,
      fullName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      role: 'lead',
      username: 'rsnowballv',
      country: 'Philippines',
      lead: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      campaign: 'u65 health',
      disposition: 'disputeWon',
      avatar: require('@src/assets/images/avatars/5.png').default
    },
    {
      id: 33,
      fullName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      role: 'lead',
      username: 'remerw',
      country: 'North Korea',
      lead: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/8.png').default
    },
    {
      id: 34,
      fullName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      role: 'lead',
      username: 'ofibbensx',
      country: 'Indonesia',
      lead: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/4.png').default
    },
    {
      id: 35,
      fullName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
      role: 'lead',
      username: 'smacgilfoyley',
      country: 'Japan',
      lead: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      campaign: 'pest control',
      disposition: 'disputeWon',
      avatar: ''
    },
    {
      id: 36,
      fullName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      role: 'lead',
      username: 'brosebothamz',
      country: 'Belarus',
      lead: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 37,
      fullName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
      role: 'lead',
      username: 'shebblethwaite10',
      country: 'Canada',
      lead: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/9.png').default
    },
    {
      id: 38,
      fullName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      role: 'lead',
      username: 'mpiccard11',
      country: 'Croatia',
      lead: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      campaign: 'plumbing',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 39,
      fullName: 'Tyne Widmore',
      company: 'Yombu PVT LTD',
      role: 'lead',
      username: 'twidmore12',
      country: 'Finland',
      lead: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 40,
      fullName: 'Florenza Desporte',
      company: 'Kamba PVT LTD',
      role: 'lead',
      username: 'fdesporte13',
      country: 'Ukraine',
      lead: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      campaign: 'pest control',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/6.png').default
    },
    {
      id: 41,
      fullName: 'Edwina Baldetti',
      company: 'Dazzlesphere PVT LTD',
      role: 'lead',
      username: 'ebaldetti14',
      country: 'Haiti',
      lead: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      campaign: 'medicare',
      disposition: 'disputeWon',
      avatar: ''
    },
    {
      id: 42,
      fullName: 'Benedetto Rossiter',
      company: 'Mybuzz PVT LTD',
      role: 'lead',
      username: 'brossiter15',
      country: 'Indonesia',
      lead: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 43,
      fullName: 'Micaela McNirlan',
      company: 'Tambee PVT LTD',
      role: 'lead',
      username: 'mmcnirlan16',
      country: 'Indonesia',
      lead: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 44,
      fullName: 'Vladamir Koschek',
      company: 'Centimia PVT LTD',
      role: 'lead',
      username: 'vkoschek17',
      country: 'Guatemala',
      lead: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      campaign: 'medicare',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 45,
      fullName: 'Corrie Perot',
      company: 'Flipopia PVT LTD',
      role: 'lead',
      username: 'cperot18',
      country: 'China',
      lead: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/3.png').default
    },
    {
      id: 46,
      fullName: 'Saunder Offner',
      company: 'Skalith PVT LTD',
      role: 'lead',
      username: 'soffner19',
      country: 'Poland',
      lead: '(200) 586-2264',
      email: 'soffner19@mac.com',
      campaign: 'plumbing',
      disposition: 'disputeWon',
      avatar: ''
    },
    {
      id: 47,
      fullName: 'Karena Courtliff',
      company: 'Feedfire PVT LTD',
      role: 'lead',
      username: 'kcourtliff1a',
      country: 'China',
      lead: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/1.png').default
    },
    {
      id: 48,
      fullName: 'Onfre Wind',
      company: 'Thoughtmix PVT LTD',
      role: 'lead',
      username: 'owind1b',
      country: 'Ukraine',
      lead: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 49,
      fullName: 'Paulie Durber',
      company: 'Babbleblab PVT LTD',
      role: 'lead',
      username: 'pdurber1c',
      country: 'Sweden',
      lead: '(694) 676-1275',
      email: 'pdurber1c@gov.uk',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: ''
    },
    {
      id: 50,
      fullName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      role: 'lead',
      username: 'bkrabbe1d',
      country: 'China',
      lead: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      campaign: 'u65 health',
      disposition: 'new',
      avatar: require('@src/assets/images/avatars/9.png').default
    }
  ]
}

// GET ALL DATA
mock.onGet('/api/leads/list/all-data').reply(200, data.leads)

// GET Updated DATA
mock.onGet('/api/leads/list/data').reply(config => {
  const { q = '', perPage = 10, page = 1, role = null, campaign = null, disposition = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.leads.filter(
    lead =>
      (lead.username.toLowerCase().includes(queryLowered) || lead.fullName.toLowerCase().includes(queryLowered)) &&
      lead.role === (role || lead.role) &&
      lead.campaign === (campaign || lead.campaign) &&
      lead.disposition === (disposition || lead.disposition)
  )
  /* eslint-enable  */

  return [
    200,
    {
      leads: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET LEAD
mock.onGet('/api/leads/lead').reply(config => {
  const { id } = config
  const lead = data.leads.find(i => i.id === id)
  return [200, { lead }]
})
