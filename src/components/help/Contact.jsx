import { Form, redirect, useActionData }  from "react-router-dom";

export default function Contact() {
    const data = useActionData()

    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact" className={'mt-7'}>
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required className={'mb-7 p-2 rounded border-0 w-80 text-[#1e293b]'} />
          </label>
          <label>
            <span>Your message:</span>
            <textarea className={'mb-7 p-2 rounded border-0 w-80 text-[#1e293b]'} name="message" required></textarea>
          </label>
          <button className={'bg-pink-500 text-white rounded py-2 px-5'}>Submit</button>

          {data && data.error && <p>{ data.error }</p>}
        </Form>
      </div>
    )
}

export const contactAction = async ({ request }) => {

  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  console.log(submission)

  if (submission.message.length < 10) {
    return {
      error: 'Your message is too short. Please provide at least 10 characters.'
    }
  }

  return redirect('/')
}