import { PersonType } from "./Type/Person";
import { MutationBuild } from "./Mutation/index";
import { QueryBuild } from "./Query/index";

class BuildSchemaStringGrapql {
    static buildSchemaString: string = QueryBuild.query
        .concat(",")
        .concat(MutationBuild.mutationString)
        .concat(",")
        .concat(PersonType.person);;
}

export default BuildSchemaStringGrapql;