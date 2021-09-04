import { Card, CardBody, CardText, Button } from "reactstrap"
import medal from "@src/assets/images/illustration/badge.svg"

const CardMedal = () => {
  return (
    <Card className="card-congratulations-medal">
      <CardBody>
        <h5>Welcome back 🎉 John!</h5>
        <CardText className="font-small-3">Here are today's earnings</CardText>
        <h3 className="mb-75 mt-2 pt-50">
          <a href="/" onClick={e => e.preventDefault()}>
            $1,150
          </a>
        </h3>
        <Button.Ripple color="primary">View Sales</Button.Ripple>
        <img className="congratulation-medal" src={medal} alt="Medal Pic" />
      </CardBody>
    </Card>
  )
}

export default CardMedal
