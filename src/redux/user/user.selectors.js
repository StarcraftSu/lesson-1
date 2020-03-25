import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],//return state.user
    user => user.currentUser
)