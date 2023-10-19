import { FormValues, Path, UseFormReturn } from "@vorms/core";
import { castArray } from "lodash-es";

export type IResourceHandlerCursoContext = Awaited<ReturnType<typeof createAppContextResourceHandlerCursoForm>>;

export type IResourceHandlerCursoFormValues = FormValues & {
  modalidadeId: number;
  nome: string;
  nomeAbreviado: string;
};

export const createAppContextResourceHandlerCursoForm = async <
  Values extends IResourceHandlerCursoFormValues,
  Form extends UseFormReturn<Values>
>(
  form: Form
) => {
  const isBusy = computed(() => form.isSubmitting.value);
  const canSubmit = computed(() => form.dirty.value && !form.isValidating.value && !isBusy.value);

  const useFormField = (name: MaybeRef<Path<Values>>) => {
    const formField = form.register(name);

    //

    const errors = computed((): string[] => {
      const formErrors = form.errors.value[unref(name)] ?? null;

      if (formErrors !== null) {
        return castArray(<any>formErrors);
      }

      return [];
    });

    const hasErrors = computed(() => errors.value.length > 0);

    return {
      errors,
      hasErrors,
      //
      formField,
    };
  };

  return {
    form,

    isBusy,
    canSubmit,

    useFormField,
  };
};
