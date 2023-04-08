export default defineNuxtPlugin(async (nuxtApp) => {
  // access cookie for auth
  const { getSession } = useAuth();

  const session = await getSession();

  const accessToken = session?.accessToken;

  if (accessToken) {
    useGqlToken(accessToken);
  }
});
