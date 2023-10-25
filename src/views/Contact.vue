<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useField, useForm } from "vee-validate";
import { onMounted, ref } from "vue";
import { object, string } from "zod";
import EmailJS from "@emailjs/browser";

enum FormFields {
  name = 'name',
  email = 'email',
  message = 'message'
}

const validationSchema = toTypedSchema(
  object({
    [FormFields.name]: string().min(1),
    [FormFields.email]: string().email(),
    [FormFields.message]: string().min(1),
  }),
)

const { errors, handleSubmit, handleReset } = useForm({ validationSchema })
const { value: namealue } = useField<string>(FormFields.name)
const { value: emailValue } = useField<string>(FormFields.email)
const { value: messageValue } = useField<string>(FormFields.message)


let isInSubmission = ref(false);
let showSubmission = ref(false);
let submissionWarning = ref("");
let submissionResult = ref(false);

const onSubmit = handleSubmit(async (args) => {
  submissionWarning.value = "Sending message...";
  isInSubmission.value = true;
  showSubmission.value = true;

  var templateParams = {
    from_name: args.name,
    from_email: args.email,
    message: args.message,
  };
  try {
    await EmailJS.send(import.meta.env.VITE_EMAILJS_SERVICE ?? '', import.meta.env.VITE_EMAILJS_TEMPLATE ?? '', templateParams);
    submissionWarning.value = "Message sent successfully.";
  } catch (error) {
    submissionWarning.value = "Error, could not send message.";
    submissionResult.value = false;
  } finally {
    isInSubmission.value = false;
    submissionResult.value = true;
  }
});

onMounted(() => {
  EmailJS.init(import.meta.env.VITE_EMAILJS_KEY ?? '');
})
</script>

<template>
  <div class="grid gap-8 w-full p-4 lg:gap-16 lg:grid-cols-2 lg:max-w-5xl lg:m-auto">
    <h2 class="text-3xl lg:text-4xl leading-10 lg:leading-[44px] font-medium">
      Thanks for browsing my portfolio.
      Feel free to send me a nice message!
    </h2>
    <div class="flex flex-col gap-4 lg:gap-8">
      <div class="flex flex-col gap-2 lg:gap-4">
        <div class="field">
          <input type="text" :name="FormFields.name" placeholder="Name" v-model="namealue" :disabled="isInSubmission"
            class="input" />
          <span v-if="errors.name" class="error" :name="FormFields.name">{{ errors.name }}</span>
        </div>
        <div class="field">
          <input type="email" :name="FormFields.email" placeholder="E-mail" v-model="emailValue"
            :disabled="isInSubmission" class="input" />
          <span v-if="errors.email" class="error" :name="FormFields.email">{{ errors.email }}</span>
        </div>
        <div class="field">
          <textarea :name="FormFields.message" placeholder="Message" rows="4" v-model="messageValue"
            :disabled="isInSubmission" class="input"></textarea>
          <span v-if="errors.message" class="error" :name="FormFields.message">{{ errors.message }}</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 text-base lg:text-lg">
        <button :disabled="isInSubmission" @click.prevent="handleReset"
          class="flex place-self-start px-4 py-2 rounded-sm border border-secondary-dark/50 dark:border-primary-light/50 text-secondary transition-transform hover:scale-95">
          Clear
        </button>
        <button :disabled="isInSubmission" @click.prevent="onSubmit"
          class="p-2 rounded-sm bg-accent text-white transition-transform hover:scale-95">
          Send
        </button>
      </div>
      <div class="p-4 rounded text-white" :class="{
        hidden: !showSubmission,
        'bg-accent': submissionResult && !isInSubmission,
        'bg-danger': !submissionResult && !isInSubmission,
        'bg-external': isInSubmission,
      }">
        {{ submissionWarning }}
      </div>
    </div>
  </div>
</template>

<style>
.field {
  @apply flex flex-col gap-1;
}

.input {
  @apply px-3 py-2 bg-transparent border border-secondary-dark/50 dark:border-primary-light/50 rounded-sm text-base lg:text-lg outline-none;
}

.error {
  @apply text-xs lg:text-sm text-danger;
}
</style>
