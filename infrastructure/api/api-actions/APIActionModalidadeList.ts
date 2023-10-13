import { GenericListInput, ListModalidadeQuery } from "../../../.nuxt/gql/default";
import { BaseAPIActionList } from "./BaseAPIActionList";

export interface IAPIActionModalidadeListDto extends GenericListInput {}

export class APIActionModalidadeList extends BaseAPIActionList<ListModalidadeQuery["list"], IAPIActionModalidadeListDto> {
  async invoke(rawDto: IAPIActionModalidadeListDto) {
    const dto = rawDto;

    const response = await this.appContextAPI.gql("ListModalidade", {
      dto: {
        ...dto,
      },
    });

    return response.list;
  }
}
