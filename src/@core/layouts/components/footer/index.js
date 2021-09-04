// ** Icons Import
import { Heart } from "react-feather"

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-left d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://www.ringfuze.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          RingFuze, Inc.
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <span className="float-md-right d-none d-md-block">
        Hand-crafted & Made with
        <Heart size={14} /> in Cali
      </span>
    </p>
  )
}

export default Footer
