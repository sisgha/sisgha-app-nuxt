import { CursoFindByIdQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionFindById } from "./BaseAPIActionFindById";

export class APIActionCursoFindById extends BaseAPIActionFindById<CursoFindByIdQuery["curso"]> {
  protected async retrieveResource(id: number) {
    const response = await this.appContextAPI.gql("CursoFindById", { id: id });
    return response.curso;
  }
}
