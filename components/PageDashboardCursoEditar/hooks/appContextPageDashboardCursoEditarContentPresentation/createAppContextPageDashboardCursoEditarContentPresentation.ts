import { useForm } from "@vorms/core";
import { APIActionCursoUpdate, IAPIActionCursoUpdateDto } from "../../../../infrastructure";
import { zodResolver } from "../../../../infrastructure/utils/fixtures";
import { useAppContextPageDashboardCurso } from "../../../PageDashboardCurso/hooks";

export type IPageDashboardCursoEditarContentPresentationContext = Awaited<
  ReturnType<typeof createAppContextPageDashboardCursoEditarContentPresentation>
>;

export const createAppContextPageDashboardCursoEditarContentPresentation = async () => {
  const appContextAPI = useAppContextAPI();

  const { idCurso } = useAppContextPageDashboardCurso();

  const apiActionCursoFindById = await useAPIACtionCursoFindById(idCurso);

  const form = useForm<IAPIActionCursoUpdateDto>({
    validateMode: "submit",
    reValidateMode: "blur",

    initialValues: {
      id: unref(idCurso),
      nome: "",
      nomeAbreviado: "",
      modalidadeId: -1,
    },

    validate: zodResolver(appContextAPI.buildSchema(APIActionCursoUpdate)),

    onSubmit(data, { setSubmitting }) {
      new Promise<void>(async (resolve) => {
        setSubmitting(true);

        await appContextAPI.invoke(APIActionCursoUpdate, data);
        await appContextAPI.invalidateQueries("cursos");

        await navigateTo({ name: "dashboard-cursos-id_curso" });

        setSubmitting(false);
        resolve();
      });
    },
  });

  const { resultCold } = apiActionCursoFindById;

  const resetForm = () => {
    const curso = unref(resultCold);

    if (curso) {
      form.resetForm({
        values: {
          id: curso.id,
          nome: curso.nome,
          nomeAbreviado: curso.nomeAbreviado,
          modalidadeId: curso.modalidade.id,
        },
      });
    } else {
      form.resetForm({
        values: {
          id: unref(idCurso),
          nome: "",
          nomeAbreviado: "",
          modalidadeId: -1,
        },
      });
    }
  };

  watch(
    [resultCold],
    () => {
      resetForm();
    },
    {
      immediate: true,
    }
  );

  return {
    form,
    apiActionCursoFindById,
  };
};
