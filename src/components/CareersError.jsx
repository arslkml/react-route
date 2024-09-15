import { Link, useRouteError } from "react-router-dom"

export default function CareersError() {
    const error = useRouteError()

  return (
    <div>
        <h2>Error</h2>
        <p>{ error.message }</p>
        <Link to='/react-route/'>Back To The Homepage</Link>
    </div>
  )
}
