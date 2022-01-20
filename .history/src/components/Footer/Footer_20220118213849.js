import Link from "react-router";
export default function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <li>
            <Link to="/" className="py-3">
              Product
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Overview
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              MarketPlace
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Features
            </Link>
          </li>
          <li>
            <Link to="/" className="">
              Integrations
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}
