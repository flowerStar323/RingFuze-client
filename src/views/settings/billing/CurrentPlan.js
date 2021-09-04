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
        <CardTitle tag="h4">Current Plan</CardTitle>
      </CardHeader>
      <CardBody>
        <h5 className="apply-job-title">
          Need to update your subscription plan?
        </h5>
        <CardText className="mb-2">
          Below you will find your current subscription plan and your monthly
          bill amount. To upgrade or downgrade your account, please click on the
          "Update Subscription" button below.
        </CardText>
        <div className="apply-job-package bg-light-primary rounded">
          <div>
            <sup className="text-body">
              <small>$</small>
            </sup>
            <h2 className="d-inline mr-25">499</h2>
            <sub className="text-body">
              <small>/ month</small>
            </sub>
          </div>
          <Badge color="light-danger" pill>
            Enterprise
          </Badge>
        </div>
        <Button color="primary" block>
          Update Subscription
        </Button>
      </CardBody>
    </Card>
  )
}

export default PaymentMethod
