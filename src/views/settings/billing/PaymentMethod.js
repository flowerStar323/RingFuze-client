import {
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardTitle,
  Button,
  Badge
} from "reactstrap"

const PaymentMethod = () => {
  return (
    <Card className="card-apply-job">
      <CardHeader>
        <CardTitle tag="h4">Current Payment Method</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className="apply-job-title">Need to update your card on file?</h5>
        <CardText className="mb-2">
          Below you will find your current credit card on file identified by the
          last 4 digits of the card number. To change your payment method,
          please click on the "Update Payment Method" button below.
        </CardText>
        <div className="apply-job-package bg-light-primary rounded">
          <div>
            <sup className="text-body">
              <small>**** **** ****</small>
            </sup>
            <h2 className="d-inline mr-25">6565</h2>
          </div>
          <Badge color="light-warning" pill>
            VISA
          </Badge>
        </div>
        <Button color="primary" block>
          Update Payment Method
        </Button>
      </CardBody>
    </Card>
  )
}

export default PaymentMethod
