export const updateObjectInArray = (users, actionUserId, booleanObj) => {
    return users.map(u => {
        if (u["id"] === actionUserId) {
            return {...u, ...booleanObj}
        }
        return u;
    })
}