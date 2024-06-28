'use client'
import { useRouter } from "next/navigation"
import { FormEvent } from 'react'


// import { authenticate } from '@/app/lib/actions'
// import { useFormState, useFormStatus } from 'react-dom'

export default function LoginForm() {

    const router = useRouter()
    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')
        const response = await fetch('api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        if(response.ok) {
            router.push('/cases')
        } else {
            // handle errors
        }
    }
    // const [errorMessage, dispatch] = useFormState(authenticate, undefined)
    return (
        <div className="w-full max-w-xs m-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
                </div>
            </form>
        </div>
    )
}
