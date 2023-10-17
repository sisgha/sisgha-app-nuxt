import { APIActionCursoFindById, useAPIActionFindById } from "../../../../infrastructure";

export type IResourceHandlerCursoContext = Awaited<ReturnType<typeof createAppContextResourceHandlerCurso>>;

export const createAppContextResourceHandlerCurso = async (idCursoInput: MaybeRef<number>) => {
  const idCurso = computed(() => unref(idCursoInput));

  const apiActionUsuarioFindById = await useAPIActionFindById(APIActionCursoFindById, idCurso, "cursos", "curso::id");

  return {
    idCurso,
    apiActionUsuarioFindById,
  };
};
