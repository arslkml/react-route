import { useParams, useLoaderData } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()


    return (
    <div className={'bg-slate-800 p-5 rounded my-5 mx-0'}>
        <h2>Career Details from { career.title }</h2>
        <p>Starting salary: { career.salary }</p>
        <p>Location { career.location }</p>
        <div> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate iusto!</p>
        </div>
    </div>
  )
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4000/careers/' + id)

    if (!res.ok) {
        throw Error('Could not find that career')
    }

    return res.json() 
}
