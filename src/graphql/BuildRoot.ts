import UserService from "../service/User/User";

class BuildRoot {
    static buildRoot: object = {
        user: UserService.getUserById,
        users: UserService.retrieveUsers,
        updateUser: UserService.updateUser,
    };
}

export default BuildRoot;
