import { cookies } from 'next/headers'
import { findSession } from './db'

export async function getSession() {
    const sessionId = cookies().get('sessionId')?.value
    return sessionId ? await findSession(sessionId): null
}

// export async function createSession(user) {
//     const sessionId = generateSessionId() // Generate a unique session ID
//     await db.insertSession({ sessionId, userId: user.id, createdAt: new Date() })
//     return sessionId
// }