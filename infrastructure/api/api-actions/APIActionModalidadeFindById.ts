import { ModalidadeFindByIdQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionFindById } from "./BaseAPIActionFindById";

export type IAPIActionModalidadeFindByIdResult = ModalidadeFindByIdQuery["modalidade"];

export class APIActionModalidadeFindById extends BaseAPIActionFindById<IAPIActionModalidadeFindByIdResult> {
  protected async retrieveResource(id: number) {
    const response = await this.appContextAPI.gql("ModalidadeFindById", { id: id });
    return response.modalidade;
  }
}
