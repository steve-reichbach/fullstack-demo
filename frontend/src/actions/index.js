export const addRecord = user => {
    user.id = users.length + 1
    setUsers([...users, user])
};

export const deleteRecord = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id))
};

export const updateRecord = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
};

export const editRecord = user => {
    setEditing(true);

    setCurrentUser({id: user.id, name: user.name, username: user.username})
};
