import classnames from "classnames"
import Avatar from "@components/avatar"
import {
  User,
  DollarSign,
  Briefcase,
  AlertTriangle,
  MoreVertical
} from "react-feather"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Media,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap"

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: "526",
      subtitle: "Leads",
      color: "light-info",
      icon: <User size={24} />
    },
    {
      title: "32",
      subtitle: "Accounts",
      color: "light-primary",
      icon: <Briefcase size={24} />
    },
    {
      title: "18",
      subtitle: "Disputes",
      color: "light-danger",
      icon: <AlertTriangle size={24} />
    },
    {
      title: "$26,300",
      subtitle: "Revenue",
      color: "light-success",
      icon: <DollarSign size={24} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className="mr-2" />
            <Media className="my-auto" body>
              <h4 className="font-weight-bolder mb-0">{item.title}</h4>
              <CardText className="font-small-3 mb-0">{item.subtitle}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className="card-statistics">
      <CardHeader>
        <div>
          <CardTitle tag="h4">Statistics</CardTitle>
          <CardText className="card-text font-small-2 mr-25 mb-0">
            Current month
          </CardText>
        </div>
        <UncontrolledDropdown className="chart-dropdown">
          <DropdownToggle
            color=""
            className="bg-transparent btn-sm border-0 p-50"
          >
            <MoreVertical size={18} className="cursor-pointer" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem className="w-100">Today</DropdownItem>
            <DropdownItem className="w-100">Yesterday</DropdownItem>
            <DropdownItem className="w-100">Last 2 Days</DropdownItem>
            <DropdownItem className="w-100">Last 7 Days</DropdownItem>
            <DropdownItem className="w-100">This Week</DropdownItem>
            <DropdownItem className="w-100">Last Week</DropdownItem>
            <DropdownItem className="w-100">Last 30 Days</DropdownItem>
            <DropdownItem className="w-100">This Month</DropdownItem>
            <DropdownItem className="w-100">Last Month</DropdownItem>
            <DropdownItem className="w-100">Last 6 Months</DropdownItem>
            <DropdownItem className="w-100">This Year</DropdownItem>
            <DropdownItem className="w-100">Custom Range</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
