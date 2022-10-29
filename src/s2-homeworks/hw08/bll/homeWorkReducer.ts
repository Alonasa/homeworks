import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    const cloned:Array<UserType> = Object.assign([], state)
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return cloned.sort((a, b) => a.name > b.name ? 1 : -1)
            }
            if (action.payload === 'down') {
                return cloned.sort((a, b) => a.name < b.name ? 1 : -1)
            }
            return state
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}
