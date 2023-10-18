import { useAppContextResourceHandlerCurso } from "../../../ResourceHandlerCurso/hooks";

export type IResourceHandlerCursoDisplayContext = Awaited<ReturnType<typeof createAppContextResourceHandlerCursoDisplay>>;

export const createAppContextResourceHandlerCursoDisplay = async () => {
  const { idCurso } = useAppContextResourceHandlerCurso();

  const apiActionCursoFindById = await useAPIACtionCursoFindById(idCurso);

  return {
    idCurso,
    apiActionCursoFindById,
  };
};
