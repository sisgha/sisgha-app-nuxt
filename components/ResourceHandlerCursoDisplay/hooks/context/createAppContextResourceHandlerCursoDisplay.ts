import { APIActionCursoFindById, IAPIActionCursoFindByIdResult, useAPIActionFindById } from "../../../../infrastructure";
import { useAppContextResourceHandlerCurso } from "../../../ResourceHandlerCurso/hooks";

export type IResourceHandlerCursoDisplayContext = Awaited<ReturnType<typeof createAppContextResourceHandlerCursoDisplay>>;

export const createAppContextResourceHandlerCursoDisplay = async () => {
  const { idCurso } = useAppContextResourceHandlerCurso();

  const apiActionUsuarioFindById = await useAPIActionFindById<IAPIActionCursoFindByIdResult>(
    APIActionCursoFindById,
    idCurso,
    "cursos",
    "curso::id"
  );

  return {
    idCurso,
    apiActionUsuarioFindById,
  };
};
