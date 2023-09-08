import { useAuthSignInCallbackUrl } from "./useAuthSignInCallbackUrl";

export const useAuthSignIn = () => {
  const { status } = useAuthState();

  const callbackUrlRef = useAuthSignInCallbackUrl();

  watch(
    [status, callbackUrlRef],
    ([status, callbackUrl]) => {
      if (status === "authenticated") {
        return navigateTo(callbackUrl, { external: true });
      }
    },
    { immediate: true }
  );

  const { signIn } = useAuth();

  const credentials = reactive({
    username: "",
    password: "",
  });

  const isLoading = ref(false);
  const isError = ref(false);

  const isBusy = computed(() => unref(isLoading));

  const canSubmit = computed(() => unref(isBusy));

  const signInWithCredentials = async () => {
    if (isLoading.value) {
      return;
    }

    isLoading.value = true;
    isError.value = false;

    const { error, url } = await signIn("credentials", {
      callbackUrl: unref(callbackUrlRef),

      redirect: false,

      username: credentials.username,
      password: credentials.password,
    });

    if (error) {
      isError.value = true;
      isLoading.value = false;
    } else {
      // No error, continue with the sign in, e.g., by following the returned redirect:
      return navigateTo(url, { external: true });
    }
  };

  return {
    isBusy,
    canSubmit,
    isLoading,
    isError,

    // ...

    credentials,

    //

    signInWithCredentials,
  };
};
