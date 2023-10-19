import { useForm } from "@vorms/core";
import { APIActionCursoCreate, IAPIActionCursoCreateDto } from "../../../../infrastructure/api/api-actions/APIActionCursoCreate";
import { zodResolver } from "../../../../infrastructure/utils/fixtures";

export type IPageDashboardCursosNovoContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursosNovoContent>>;

export const createAppContextPageDashboardCursosNovoContent = async () => {
  const appContextAPI = useAppContextAPI();

  const form = useForm<IAPIActionCursoCreateDto>({
    validateMode: "submit",
    reValidateMode: "blur",

    initialValues: {
      nome: "",
      nomeAbreviado: "",
      modalidadeId: -1,
    },

    validate: zodResolver(appContextAPI.buildSchema(APIActionCursoCreate)),

    onSubmit(data, { setSubmitting }) {
      new Promise<void>(async (resolve) => {
        setSubmitting(true);

        await appContextAPI.invoke(APIActionCursoCreate, data);
        await appContextAPI.invalidateQueries("cursos");

        await navigateTo("/dashboard/cursos");

        setSubmitting(false);
        resolve();
      });
    },
  });

  return {
    form,
  };
};
