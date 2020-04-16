import { USER_ID } from '../actionTypes';
import { initialUserIdType, getUserIdType } from './interface';


const initialUserIdState: initialUserIdType = {
    userId: ''
}

export const getUserId = (state = initialUserIdState, action: any): getUserIdType => {
    if (action.type === USER_ID) {
        return {userId : action.userId}
    }
    return state;
};