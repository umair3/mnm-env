'user server'

import { signIn } from '../auth'

export async function authenticate(_currentState: unknown, formData: FormData) {
    try {
        await signIn('credentials', formData)
    } catch (error) {

    }
}