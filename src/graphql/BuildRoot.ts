import { getUserById, retrieveUsers, updateUser } from "../service/User/User";

class BuildRoot {
    static buildRoot: object = {
        user: getUserById,
        users: retrieveUsers,
        updateUser: updateUser,
    };
}

export default BuildRoot;
