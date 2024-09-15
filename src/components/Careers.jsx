import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
    const careers = useLoaderData()

    return (
        <div>
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id} className={'block bg-slate-800 p-5 rounded mt-5 mb-0'}>
                    <p className={'hover:text-pink-500'}>{career.title}</p>
                    <p className={'text-slate-200 text-sm'}>Based in {career.location}</p>
                    <h3>Paid {career.salary}</h3>
                </Link>
            ))}
        </div>
    )
}


export const careersLoader = async () => {
    const response = await fetch('http://localhost:4000/careers');

    if (!response.ok) {
        throw Error('Could not fetch that careers')
    }

    return response.json()
}
