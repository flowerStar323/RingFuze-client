import Avatar from "@components/avatar"
import { Table, Card, CardBody, CardHeader, CardTitle } from "reactstrap"
import {
  Wind,
  Cpu,
  Lock,
  Sun,
  TrendingUp,
  TrendingDown,
  Droplet
} from "react-feather"

const CompanyTable = () => {
  const data = [
      {
        img: require("../../assets/images/logo/Business Logos/lees-air-hvac.jpg")
          .default,
        name: "Lee's Air",
        email: "info@leesair.com",
        icon: <Wind size={18} />,
        category: "HVAC",
        leads: "114",
        revenue: "6,270",
        sales: "2.3"
      },
      {
        img: require("../../assets/images/logo/Business Logos/mr-rooter-plumbing.jpg")
          .default,
        name: "Mr. Rooter",
        email: "marketing@mrrooter.com",
        icon: <Droplet size={18} />,
        category: "Plumbing",
        leads: "106",
        revenue: "5,830",
        sales: "9.7",
        salesUp: true
      },
      {
        img: require("../../assets/images/logo/Business Logos/keyme-locksmith.jpg")
          .default,
        name: "KeyMe Locksmith",
        email: "bill@keymelocks.com",
        icon: <Lock size={18} />,
        category: "Locksmith",
        leads: "98",
        revenue: "3,430",
        sales: "6.2",
        salesUp: true
      },
      {
        img: require("../../assets/images/logo/Business Logos/goode-plumbing.jpg")
          .default,
        name: "Goode Plumbing",
        email: "leads@goodeplumbing.com",
        icon: <Droplet size={18} />,
        category: "Plumbing",
        leads: "63",
        revenue: "3,150",
        sales: "8.8",
        salesUp: true
      },
      {
        img: require("../../assets/images/logo/Business Logos/sunrun-solar.jpg")
          .default,
        name: "Sunrun",
        email: "affiliates@sunrun.com",
        icon: <Sun size={18} />,
        category: "Solar",
        leads: "82",
        revenue: "4,100",
        sales: "1.2"
      },
      {
        img: require("../../assets/images/logo/Business Logos/hi-tech-home.jpg")
          .default,
        name: "Hi-Tech Homes",
        email: "paul@hitechhome.com",
        icon: <Cpu size={18} />,
        category: "HomeTech",
        leads: "35",
        revenue: "1,925",
        sales: "6.5",
        salesUp: true
      },
      {
        img: require("../../assets/images/logo/Business Logos/allbritten-hvac.jpg")
          .default,
        name: "Allbritten",
        email: "james@allbritten.com",
        icon: <Wind size={18} />,
        category: "HVAC",
        leads: "78",
        revenue: "2,400",
        sales: "8.7",
        salesUp: true
      }
    ],
    colorsArr = {
      Plumbing: "light-primary",
      HVAC: "light-success",
      Solar: "light-warning",
      Locksmith: "light-danger",
      HomeTech: "light-info"
    }

  const renderData = () => {
    return data.map(col => {
      const IconTag = col.salesUp ? (
        <TrendingUp size={15} className="text-success" />
      ) : (
        <TrendingDown size={15} className="text-danger" />
      )

      return (
        <tr key={col.name}>
          <td>
            <div className="d-flex align-items-center">
              <div className="avatar rounded">
                <div className="avatar-content">
                  <img src={col.img} alt={col.name} />
                </div>
              </div>
              <div>
                <div className="font-weight-bolder">{col.name}</div>
                <div className="font-small-2 text-muted">{col.email}</div>
              </div>
            </div>
          </td>
          <td>
            <div className="d-flex align-items-center">
              <Avatar
                className="mr-1"
                color={colorsArr[col.category]}
                icon={col.icon}
              />
              <span>{col.category}</span>
            </div>
          </td>
          <td className="text-nowrap">
            <div className="d-flex flex-column">
              <span className="font-weight-bolder mb-25">{col.leads}</span>
            </div>
          </td>
          <td>${col.revenue}</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="font-weight-bolder mr-1">{col.sales}%</span>
              {IconTag}
            </div>
          </td>
        </tr>
      )
    })
  }

  return (
    <Card className="card-company-table">
      <CardHeader>
        <CardTitle tag="h4">Top Businesses</CardTitle>
      </CardHeader>
      <CardBody>
        <Table responsive>
          <thead>
            <tr>
              <th>Company</th>
              <th>Category</th>
              <th>Leads</th>
              <th>Revenue</th>
              <th>Sales</th>
            </tr>
          </thead>
          <tbody>{renderData()}</tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default CompanyTable
