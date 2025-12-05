"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import {
    User,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    AuthError
} from 'firebase/auth'
import { auth, googleProvider, db } from '@/lib/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'

interface AuthContextType {
    user: User | null
    loading: boolean
    signInWithGoogle: () => Promise<void>
    signInWithEmail: (email: string, password: string) => Promise<void>
    signUpWithEmail: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Helper to get user-friendly error message
function getAuthErrorMessage(error: AuthError): string {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Invalid email address format.'
        case 'auth/user-disabled':
            return 'This account has been disabled.'
        case 'auth/user-not-found':
            return 'No account found with this email.'
        case 'auth/wrong-password':
            return 'Incorrect password.'
        case 'auth/invalid-credential':
            return 'Invalid email or password.'
        case 'auth/email-already-in-use':
            return 'An account already exists with this email.'
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.'
        case 'auth/popup-closed-by-user':
            return 'Sign-in popup was closed before completing.'
        case 'auth/popup-blocked':
            return 'Sign-in popup was blocked by browser.'
        case 'auth/cancelled-popup-request':
            return 'Sign-in was cancelled.'
        case 'auth/network-request-failed':
            return 'Network error. Check your connection.'
        case 'auth/too-many-requests':
            return 'Too many attempts. Please try again later.'
        case 'auth/operation-not-allowed':
            return 'This sign-in method is not enabled. Please contact support.'
        default:
            console.error('Firebase Auth Error:', error.code, error.message)
            return `Authentication error: ${error.message}`
    }
}

// Store user data in Firestore (strings only as per user requirement)
async function storeUserData(user: User) {
    try {
        const userRef = doc(db, 'users', user.uid)
        const userSnap = await getDoc(userRef)

        // Only store string values
        const userData = {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || '',
            photoURL: user.photoURL || '',
            createdAt: userSnap.exists() ? userSnap.data().createdAt : new Date().toISOString(),
            lastLoginAt: new Date().toISOString(),
            provider: user.providerData[0]?.providerId || 'unknown'
        }

        await setDoc(userRef, userData, { merge: true })
        console.log('User data stored successfully')
    } catch (error) {
        console.error('Error storing user data:', error)
        // Don't throw - user can still use the app without Firestore
    }
}

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user)
            setLoading(false)

            // Store user data when they sign in
            if (user) {
                await storeUserData(user)
            }
        })

        return () => unsubscribe()
    }, [])

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider)
            await storeUserData(result.user)
        } catch (error) {
            const authError = error as AuthError
            console.error('Google Sign In Error:', authError.code, authError.message)
            throw new Error(getAuthErrorMessage(authError))
        }
    }

    const signInWithEmail = async (email: string, password: string) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            await storeUserData(result.user)
        } catch (error) {
            const authError = error as AuthError
            console.error('Email Sign In Error:', authError.code, authError.message)
            throw new Error(getAuthErrorMessage(authError))
        }
    }

    const signUpWithEmail = async (email: string, password: string) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await storeUserData(result.user)
        } catch (error) {
            const authError = error as AuthError
            console.error('Email Sign Up Error:', authError.code, authError.message)
            throw new Error(getAuthErrorMessage(authError))
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            const authError = error as AuthError
            console.error('Sign Out Error:', authError.code, authError.message)
            throw new Error(getAuthErrorMessage(authError))
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signInWithGoogle,
            signInWithEmail,
            signUpWithEmail,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

