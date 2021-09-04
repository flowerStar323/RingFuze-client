// React
import { Fragment, useContext } from 'react'

// Components
import { Row, Col } from 'reactstrap'
import {
  Phone,
  AlertTriangle,
  RefreshCcw,
  DollarSign,
  Award,
  Coffee
} from 'react-feather'
import { ThemeColors } from '@src/utility/context/ThemeColors'

// Imports
import StatsVertical from '@components/widgets/stats/StatsVertical'
import Chart from './chart'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/charts/recharts.scss'

const Reports = () => {
  // ** Context
  const { colors } = useContext(ThemeColors)

  // ** Vars
  const donut = {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1'
  }

  return (
    <Fragment>
      <Row>
        {/* Stats With Icons */}
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Phone size={21} />} color='info' stats='1,386' statTitle='Total Calls' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<RefreshCcw size={21} />} color='primary' stats='853' statTitle='Converted' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<AlertTriangle size={21} />} color='danger' stats='67' statTitle='Disputes' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Award size={21} />} color='success' stats='$55,440' statTitle='Revenue' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<Coffee size={21} />} color='warning' stats='$34,650' statTitle='Payout' />
        </Col>
        <Col xl='2' md='4' sm='6'>
          <StatsVertical icon={<DollarSign size={21} />} color='success' stats='$20,790' statTitle='Profit' />
        </Col>
        {/* Stats With Icons */}
      </Row>
      <Row>
        <Col>
          <Chart primary={colors.primary.main}/>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Reports