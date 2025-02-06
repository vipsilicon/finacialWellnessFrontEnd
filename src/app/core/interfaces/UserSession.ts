import { User } from "./User"

export interface UserSession {
    id: number
    userID: number
    user: User
    ipAddress: string
    browser: string
    device: string
    createdDate: Date
}