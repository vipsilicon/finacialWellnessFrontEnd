import { AccountStatusEnum } from '../enums/AccountStatusEnum';

export interface User {
    id: number
    firstName: string
    middleName: string
    lastName: string
    email: string
    phoneNumber: number
    accountStatus: AccountStatusEnum
}