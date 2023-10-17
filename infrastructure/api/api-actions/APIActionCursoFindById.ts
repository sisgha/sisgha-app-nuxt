import { CursoFindByIdQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionFindById } from "./BaseAPIActionFindById";

export type IAPIActionCursoFindByIdResult = CursoFindByIdQuery["curso"];

export class APIActionCursoFindById extends BaseAPIActionFindById<IAPIActionCursoFindByIdResult> {
  protected async retrieveResource(id: number) {
    const response = await this.appContextAPI.gql("CursoFindById", { id: id });
    return response.curso;
  }
}
