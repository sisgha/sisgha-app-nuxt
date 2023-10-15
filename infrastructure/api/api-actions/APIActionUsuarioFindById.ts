import { UsuarioFindByIdQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionFindById } from "./BaseAPIActionFindById";

export type IAPIActionUsuarioFindByIdResult = UsuarioFindByIdQuery["usuario"];

export class APIActionUsuarioFindById extends BaseAPIActionFindById<IAPIActionUsuarioFindByIdResult> {
  protected async retrieveResource(id: number) {
    const response = await this.appContextAPI.gql("UsuarioFindById", { id: id });
    return response.usuario;
  }
}
