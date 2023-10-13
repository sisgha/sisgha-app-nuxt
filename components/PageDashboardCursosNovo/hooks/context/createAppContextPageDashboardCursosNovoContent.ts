import { useForm } from "@vorms/core";
import { APIActionCursoCreate, IAPIActionCursoCreateDto } from "../../../../infrastructure/api/api-actions/APIActionCursoCreate";
import { zodResolver } from "../../../../infrastructure/utils/fixtures";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT";

export type IPageDashboardCursosNovoContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursosNovoContent>>;

export const createAppContextPageDashboardCursosNovoContent = async (shouldProvide = true) => {
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

  const isBusy = computed(() => form.isSubmitting.value);
  const canSubmit = computed(() => form.dirty.value && !form.isValidating.value && !isBusy.value);

  const appContextPageDashboardCursosNovoContent = {
    form,

    //
    isBusy,
    canSubmit,
  } as const;

  if (shouldProvide) {
    provide(APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT, appContextPageDashboardCursosNovoContent);
  }

  return appContextPageDashboardCursosNovoContent;
};
