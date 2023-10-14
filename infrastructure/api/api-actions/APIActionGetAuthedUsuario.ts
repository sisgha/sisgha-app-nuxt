import { GetAuthedUsuarioQuery } from "../../../.nuxt/gql/default";
import { BaseAPIAction } from "./BaseAPIAction";

type IRetrievedUsuario = GetAuthedUsuarioQuery["usuario"];

export class APIActionGetAuthedUsuario extends BaseAPIAction<void, IRetrievedUsuario | null> {
  async invoke() {
    const response = await this.appContextAPI.gql("GetAuthedUsuario", undefined);
    const usuario = response.usuario;
    return usuario;
  }
}
