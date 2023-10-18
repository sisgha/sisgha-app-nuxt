export type IResourceHandlerCursoContext = Awaited<ReturnType<typeof createAppContextResourceHandlerCurso>>;

export const createAppContextResourceHandlerCurso = async (idCursoInput: MaybeRef<number>) => {
  const idCurso = computed(() => unref(idCursoInput));

  const apiActionCursoFindById = await useAPIACtionCursoFindById(idCurso);

  return {
    idCurso,
    apiActionCursoFindById,
  };
};
