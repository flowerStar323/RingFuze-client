import { Fragment, useState } from 'react'

// ** Third Party Components
import { Trash2, ArrowRight } from 'react-feather'
import { Label, Form, FormGroup, Row, Col, Button, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap'
import Select from 'react-select'
import { selectThemeColors } from '@utils'
import Cleave from 'cleave.js/react'

const AccountDetails = ({ stepper, type }) => {
  const [currentIndustry, setCurrentIndustry] = useState({ value: '', label: 'Select Industry' })
  const options = { delimiters: [',', '.'], blocks: [3, 3, 2], uppercase: true }

  // ** Select Options
  const industryOptions = [
    {
      label: 'Auto',
      options: [
        { value: 'auto_auto-dealership', label: 'Auto Dealerships' },
        { value: 'auto_auto-repair', label: 'Auto Repair' },
        { value: 'auto_auto-parts', label: 'Auto Parts' },
        { value: 'auto_roadside-assistance', label: 'Roadside Assistance' },
        { value: 'auto_other', label: 'Auto Other' }
      ]
    },
    {
      label: 'Dating',
      options: [
        { value: 'dating', label: 'Dating' },
        { value: 'dating_other', label: 'Dating Other' }
      ]
    },
    {
      label: 'Financial',
      options: [
        { value: 'financial_credit-repair', label: 'Credit Repair' },
        { value: 'financial_debt-relief', label: 'Debt Relief' },
        { value: 'financial_debt-consolidation', label: 'Debt Consolidation' },
        { value: 'financial_credit-card-processing', label: 'Credit Card Processing' },
        { value: 'financial_mortgage', label: 'Mortgage' },
        { value: 'financial_payday-loan', label: 'Payday Loan' },
        { value: 'financial_student-loan-consolidation', label: 'Student Loan Consolidation' },
        { value: 'financial_tax-debt-relief', label: 'Tax Debt Relief' },
        { value: 'financial_other', label: 'Financial Other' }
      ]
    },
    {
      label: 'Business Services',
      options: [
        { value: 'business-services_personal-tax-preparation', label: 'Personal Tax Preparation' },
        { value: 'business-services_business tax-preparation', label: 'Business Tax Preparation' },
        { value: 'business-services_bookkeeping', label: 'Bookkeeping' },
        { value: 'business-services_certified-personal-accountant', label: 'Certified Personal Accountant' },
        { value: 'business-services_business-formation', label: 'Business Formation' },
        { value: 'business-services_payroll-services', label: 'Payroll Services' },
        { value: 'business-services_other', label: 'Business Cervices Other' }
      ]
    },
    {
      label: 'Home Services',
      options: [
        { value: 'home-services_appliance-repair', label: 'Appliance Repair' },
        { value: 'home-services_cable-satellite-tv', label: 'Cable / Satellite TV' },
        { value: 'home-services_cabinets-countertops', label: 'Cabinets & Countertops' },
        { value: 'home-services_door-installation', label: 'Door Installation' },
        { value: 'home-services_electrical', label: 'Electrical' },
        { value: 'home-services_flooring', label: 'Flooring' },
        { value: 'home-services_fences', label: 'Fences' },
        { value: 'home-services_garage-door', label: 'Garage Door' },
        { value: 'home-services_gutter', label: 'Gutter' },
        { value: 'home-services_handyman-service', label: 'Handyman Service' },
        { value: 'home-services_home-cleaner-maid', label: 'Home Cleaner / Maid' },
        { value: 'home-services_home-security', label: 'Home Security' },
        { value: 'home-services_hardscape', label: 'Hardscape' },
        { value: 'home-services_internet', label: 'Internet' },
        { value: 'home-services_lawncare', label: 'Lawncare' },
        { value: 'home-services_landscape', label: 'Landscape' },
        { value: 'home-services_locksmith', label: 'Locksmith' },
        { value: 'home-services_painting-staining', label: 'Painting & Staining' },
        { value: 'home-services_pest-control', label: 'Pest Control' },
        { value: 'home-services_plumbing', label: 'Plumbing' },
        { value: 'home-services_roofing', label: 'Roofing' },
        { value: 'home-services_solar', label: 'Solar' },
        { value: 'home-services_swimming-pools-spas', label: 'Swimming Pools & Spas' },
        { value: 'home-services_tree-removal', label: 'Tree Removal' },
        { value: 'home-services_mold-removal', label: 'Mold Removal' },
        { value: 'home-services_water-damage', label: 'Water Damage' },
        { value: 'home-services_window-installation-repair', label: 'Window Installation/Repair' },
        { value: 'home-services_fire-damage', label: 'Fire Damage' },
        { value: 'home-services_heating-cooling', label: 'Heating & Cooling' },
        { value: 'home-services_other', label: 'Home Services Other' }
      ]
    },
    {
      label: 'Identity Theft',
      options: [
        { value: 'identity-theft', label: 'Identity Theft' },
        { value: 'identity-theft_other', label: 'Identity Theft Other' }
    ]
    },
    {
      label: 'Insurance',
      options: [
        { value: 'insurance_pet', label: 'Pet Insurance' },
        { value: 'insurance_wedding-events', label: 'Wedding & Events Insurance' },
        { value: 'insurance_dental', label: 'Dental Insurance' },
        { value: 'insurance_vision', label: 'Vision Insurance' },
        { value: 'insurance_commercial', label: 'Commercial Insurance' },
        { value: 'insurance_auto', label: 'Auto Insurance' },
        { value: 'insurance_health', label: 'Health Insurance' },
        { value: 'insurance_home', label: 'Home Insurance' },
        { value: 'insurance_condo', label: 'Condo Insurance' },
        { value: 'insurance_renters', label: 'Renters Insurance' },
        { value: 'insurance_life', label: 'Life Insurance' },
        { value: 'insurance_other', label: 'Insurance Other' }
      ]
    },
    {
      label: 'IT Services',
      options: [
        { value: 'it-services_network-infrastructure', label: 'Network Infrastructure' },
        { value: 'it-services_hardware', label: 'Hardware' },
        { value: 'it-services_software', label: 'Software' },
        { value: 'it-services_mobile-cevice-repair', label: 'Mobile Device Repair' },
        { value: 'it-services_cloud-computing', label: 'Cloud Computing' },
        { value: 'it-services_cyber-security', label: 'Cyber Security' },
        { value: 'it-services_other', label: 'IT Service Other' }
      ]
    },
    {
      label: 'Legal',
      options: [
        { value: 'legal_criminal', label: 'Criminal' },
        { value: 'legal_bankruptcy', label: 'Bankruptcy' },
        { value: 'legal_divorce', label: 'Divorce' },
        { value: 'legal_family', label: 'Family' },
        { value: 'legal_medical', label: 'Medical' },
        { value: 'legal_personal-injury', label: 'Personal Injury' },
        { value: 'legal_workers-compensation', label: 'Workers Compensation' },
        { value: 'legal_immigration', label: 'Immigration' },
        { value: 'legal_estate-planning', label: 'Estate Planning' },
        { value: 'legal_intellectual-property', label: 'Intellectual Property' },
        { value: 'legal_corporate', label: 'Corporate' },
        { value: 'legal_tax', label: 'Tax' },
        { value: 'legal_other', label: 'Legal Other' }
      ]
    },
    {
      label: 'Medical',
      options: [
        { value: 'medical_dental', label: 'Dental' },
        { value: 'medical_diet-weight-loss', label: 'Diet / Weight Loss' },
        { value: 'medical_drug-rehab', label: 'Drug Rehab' },
        { value: 'medical_hair-removal', label: 'Hair Removal' },
        { value: 'medical_plastic-surgery', label: 'Plastic Surgery' },
        { value: 'medical_durable-medicalequipment', label: 'Durable Medical Equipment' },
        { value: 'medical_senior-care', label: 'Senior Care' },
        { value: 'medical_other', label: 'Medicare Other' }
      ]
    },
    {
      label: 'Psychic',
      options: [
        { value: 'psychic_online-psychic', label: 'Online Psychic' },
        { value: 'psychic_palm-reading', label: 'Palm Reading' },
        { value: 'psychic_tarot-card-readings', label: 'Tarot Card Readings' },
        { value: 'psychic_psychic-readings', label: 'Psychic Readings' },
        { value: 'psychic_chakra-balancing', label: 'Chakra Balancing' },
        { value: 'psychic_meditation-spiritual-healing', label: 'Meditation & Spiritual Healing' },
        { value: 'psychic_other', label: 'Psychic Other' }
      ]
    },
    {
      label: 'Travel',
      options: [
        { value: 'travel_airline-flight-booking', label: 'Airline Flight Booking' },
        { value: 'travel_cruise-lines', label: 'Cruise Lines' },
        { value: 'travel_hotel-bookings', label: 'Hotel Bookings' },
        { value: 'travel_rental-car-bookings', label: 'Rental Car Bookings' },
        { value: 'travel_travel-packages', label: 'Travel Packages' },
        { value: 'travel_other', label: 'Travel Other' }
      ]
    }
  ]

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Campaign Details</h5>
        <small className='text-muted'>Enter Your Campaign Details.</small>
      </div>
      <Form>
        <Row>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label'>
              Campaign Name
            </Label>
            <Input required type='text' placeholder='' />
          </FormGroup>
          <FormGroup tag={Col} md='6'>
            <Label className='form-label'>
              Industry
            </Label>
            <Select
              required
              isClearable={false}
              theme={selectThemeColors}
              className='react-select'
              classNamePrefix='select'
              options={industryOptions}
              value={currentIndustry}
            />
          </FormGroup>
        </Row>
        {/* <Row className='mb-2'>
          <FormGroup tag={Col} md='6'>
            <Label>
              Price Per Call
            </Label>
            <InputGroup>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
              <Cleave
                className='form-control'
                placeholder=""
                options={options}
                id='custom-delimiters'
              />
            </InputGroup>
          </FormGroup>
        </Row> */}
        <div className='d-flex justify-content-between'>
          <Button.Ripple color='danger' outline href='/campaigns/list'>
            <Trash2 size={14} className='align-middle mr-sm-25 mr-0'></Trash2>
            <span className='align-middle d-sm-inline-block d-none'>Cancel</span>
          </Button.Ripple>
          <Button.Ripple type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ml-sm-25 ml-0'></ArrowRight>
          </Button.Ripple>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
