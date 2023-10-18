import { BaseAPIActionDeleteById } from "./BaseAPIActionDeleteById";

export class APIActionCursoDeactivate extends BaseAPIActionDeleteById {
  protected async deactivateResource(id: number) {
    const response = await this.appContextAPI.gql("CursoDelete", { id: id });
    return response.result;
  }
}
