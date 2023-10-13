import { GenericListInput, ListUsuarioQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionList } from "./BaseAPIActionList";

export interface IAPIActionUsuarioListDto extends GenericListInput {}

export class APIActionUsuarioList extends BaseAPIActionList<ListUsuarioQuery["list"], IAPIActionUsuarioListDto> {
  async invoke(rawDto: IAPIActionUsuarioListDto) {
    const dto = rawDto;

    const response = await this.appContextAPI.gql("ListUsuario", {
      dto: {
        ...dto,
      },
    });

    return response.list;
  }
}
