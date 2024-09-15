import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {
    const location = useLocation()
    
    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink =+ `/${crumb}`

            return (
                <div className="after:content-['>'] after:m-3 last:after:content-none" key={crumb}>
                    <Link className={'text-[#ddd]'} to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className={'max-w-7xl my-5 mx-auto flex'}>
            {crumbs}
        </div>
    )
}

