export type IPageDashboardCursoContext = Awaited<ReturnType<typeof createAppContextPageDashboardCurso>>;

export const createAppContextPageDashboardCurso = async () => {
  const route = useRoute();

  const idCursoParam = computed(() => route.params.id_curso);

  const idCurso = useParsedResourceId(idCursoParam);

  return {
    idCurso,
  };
};
