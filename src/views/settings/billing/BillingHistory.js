import { Table, Badge, Card, CardHeader, CardTitle, CardBody } from "reactstrap"

const BillingHistory = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Billing History</CardTitle>
      </CardHeader>
      <CardBody>
        <Table className="table-hover-animation" responsive>
          <thead>
            <tr>
              <th>Date</th>
              <th>Plan</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feb 1, 2021</td>
              <td>Enterprise Monthly</td>
              <td>$499.00</td>
              <td>
                <Badge pill color="light-danger" className="mr-1">
                  Unsuccessful
                </Badge>
              </td>
            </tr>
            <tr>
              <td>Jan 1, 2021</td>
              <td>Enterprise Monthly</td>
              <td>$499.00</td>
              <td>
                <Badge pill color="light-success" className="mr-1">
                  Paid
                </Badge>
              </td>
            </tr>
            <tr>
              <td>Dec 1, 2020</td>
              <td>Standard Monthly</td>
              <td>$249.00</td>
              <td>
                <Badge pill color="light-success" className="mr-1">
                  Paid
                </Badge>
              </td>
            </tr>
            <tr>
              <td>Nov 1, 2020</td>
              <td>Basic Monthly</td>
              <td>$99.00</td>
              <td>
                <Badge pill color="light-success" className="mr-1">
                  Paid
                </Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default BillingHistory
