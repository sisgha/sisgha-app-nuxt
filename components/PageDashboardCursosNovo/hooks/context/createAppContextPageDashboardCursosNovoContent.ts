import { useQueryClient } from "@tanstack/vue-query";
import { useForm } from "@vorms/core";
import { api } from "../../../../infrastructure";
import { zodResolver } from "../../../../infrastructure/app-utils/fixtures";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT";

export type IPageDashboardCursosNovoContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursosNovoContent>>;

export const createAppContextPageDashboardCursosNovoContent = async (shouldProvide = true) => {
  const { contextRef } = useAppContextAPI();

  const schema = api.buildCreateCursoZodSchema(contextRef);

  const queryClient = useQueryClient();

  const form = useForm<api.IAPICreateCursoDto>({
    validateMode: "submit",
    reValidateMode: "blur",

    initialValues: {
      nome: "",
      nomeAbreviado: "",
      modalidadeId: -1,
    },

    validate: zodResolver(schema),

    onSubmit(data, { setSubmitting }) {
      new Promise<void>(async (resolve) => {
        setSubmitting(true);

        await api.createCurso(contextRef, data);
        await queryClient.invalidateQueries({ queryKey: ["cursos"] });

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
  };

  if (shouldProvide) {
    provide(APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT, appContextPageDashboardCursosNovoContent);
  }

  return appContextPageDashboardCursosNovoContent;
};
