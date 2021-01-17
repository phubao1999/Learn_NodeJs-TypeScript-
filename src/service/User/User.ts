import users from '../../dumbData.json';

export const getUserById = (args: { id: number }) => {
    const userID = args.id;
    return users.filter((user: { id: number }) => user.id == userID)[0];
}

export const retrieveUsers = (args: { shark: any }) => {
    if (args.shark) {
        const shark = args.shark;
        return users.filter((user: { shark: any }) => user.shark === shark);
    } else {
        return users;
    }
}

export const updateUser = (id: any, name: any, age: any) => {
    users.map((user: { id: any; name: any; age: any }) => {
        if (user.id === id) {
            user.name = name;
            user.age = age;
            return user;
        }
    });
    return users.filter((user: { id: any }) => user.id === id)[0];
}
