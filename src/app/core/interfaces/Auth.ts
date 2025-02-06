
import { User } from './User';
import { UserSession } from './UserSession';

export interface Auth {
    user: User;
    userSession: UserSession;
    accessToken : {
        expiresIn: number;
        token: number;
    };
    refreshToken: {
        expiresIn: number;
        token: number;
    }
}