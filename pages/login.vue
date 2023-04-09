<template>
  <form @submit.prevent="entrarComCredenciais" class="parent-card h-full">
    <v-container class="parent-card py-6">
      <v-row class="parent-card justify-center align-center">
        <v-col cols="12" sm="7" md="6" lg="5">
          <v-card :loading="isBusy" rounded="lg" elevation="1" class="px-8 py-8">

            <LogoSisgha class="logo" />

            <v-divider class="my-4"></v-divider>

            <v-text-field :disabled="isBusy" v-model="credentials.username" type="text" required
              label="Matrícula"></v-text-field>

            <v-text-field :disabled="isBusy" v-model="credentials.password" type="password" required
              label="Senha"></v-text-field>

            <v-btn type="submit" :disabled="canSubmit" block color="green-darken-3">Entrar</v-btn>

            <div v-if="isError">
              <v-divider class="my-4"></v-divider>
              <v-alert v-model="isError" closable text="Não foi possível realizar o login." type="error"></v-alert>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </form>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "default",

  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

useHead({
  title: "SISGHA - Login"
})

const { status } = useAuthState()

const useCallbackUrl = () => {
  const route = useRoute();

  const callbackUrlParam = route.query.callbackUrl;
  const callbackUrl = typeof callbackUrlParam === "string" ? callbackUrlParam : "/"

  return callbackUrl;
}

const callbackUrl = useCallbackUrl();

watch(
  [status],
  ([status]) => {
    if (status === "authenticated") {
      return navigateTo(callbackUrl, { external: true })
    }
  },
  { immediate: true }
)


const { signIn } = useAuth()

const credentials = reactive({
  username: '',
  password: '',
})

const isLoading = ref(false);
const isError = ref(false);

const isBusy = computed(() => unref(isLoading));
const canSubmit = computed(() => unref(isBusy));

const entrarComCredenciais = async () => {
  if (isLoading.value) {
    return;
  }

  isLoading.value = true;
  isError.value = false;

  const { error, url } = await signIn('credentials', {
    callbackUrl,

    redirect: false,

    username: credentials.username,
    password: credentials.password,
  });

  if (error) {
    isError.value = true;
    isLoading.value = false;
  } else {
    // No error, continue with the sign in, e.g., by following the returned redirect:
    return navigateTo(url, { external: true })
  }

}

</script>

<style scoped>
.parent-card {
  height: 100%;
}

.logo {
  max-width: 18rem;
  margin: 0 auto;
}
</style>