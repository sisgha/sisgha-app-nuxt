import { CursoListQuery, GenericListInput } from "../../../.nuxt/gql/default";
import { BaseAPIActionList } from "./BaseAPIActionList";

export interface IAPIActionCursoListDto extends GenericListInput {}

export class APIActionCursoList extends BaseAPIActionList<CursoListQuery["list"], IAPIActionCursoListDto> {
  async invoke(rawDto: IAPIActionCursoListDto) {
    const dto = rawDto;

    const response = await this.appContextAPI.gql("CursoList", {
      dto: {
        ...dto,
      },
    });

    return response.list;
  }
}
