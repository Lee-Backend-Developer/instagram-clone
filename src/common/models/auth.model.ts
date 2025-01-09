/**
 * Represents the login form 
 */
export interface LoginInput {
    /** Username or email of the user */
    email: string | null

    /** User's password */
    password: string | null
}