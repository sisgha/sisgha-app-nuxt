import { GenericListInput, ListCursoQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionList } from "./BaseAPIActionList";

export interface IAPIActionCursoListDto extends GenericListInput {}

export class APIActionCursoList extends BaseAPIActionList<ListCursoQuery["list"], IAPIActionCursoListDto> {
  async invoke(rawDto: IAPIActionCursoListDto) {
    const dto = rawDto;

    const response = await this.appContextAPI.gql("ListCurso", {
      dto: {
        ...dto,
      },
    });

    return response.list;
  }
}
