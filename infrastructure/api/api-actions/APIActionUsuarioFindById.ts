import { UsuarioFindByIdQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionFindById } from "./BaseAPIActionFindById";

export class APIActionUsuarioFindById extends BaseAPIActionFindById<UsuarioFindByIdQuery["usuario"]> {
  protected async retrieveResource(id: number) {
    const response = await this.appContextAPI.gql("UsuarioFindById", { id: id });
    return response.usuario;
  }
}
