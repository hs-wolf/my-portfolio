<script setup lang="ts">
import { ref } from "vue";

let isInSubmission = ref(false);
let showSubmission = ref(false);
let submissionWarning = ref("");
let submissionResult = ref(false); 

const onSubmit = async (values: any) => {
  submissionWarning.value = "Sending message...";
  isInSubmission.value = true;
  showSubmission.value = true;

  var templateParams = {
    from_name: values.name,
    from_email: values.email,
    message: values.message,
  };
  try {
    // await EmailJS.send("service_njgtg69", "template_yxof420", templateParams);
  } catch (error) {
    submissionWarning.value = "Error, could not send message.";
    isInSubmission.value = false;
    submissionResult.value = false;
    return;
  }
  submissionWarning.value = "Message sent successfully.";
  isInSubmission.value = false;
  submissionResult.value = true;
};

const messageSchema = {
  name: "required|min:3|max:100",
  email: "required|min:3|max:100|email",
  message: "required|min:3|max:10000",
};
</script>

<template>
  <div class="grid lg:grid-cols-2 space-y-4">
    <h2 class="text-xl lg:text-3xl self-center space-y-2">
      <p>Thanks for browsing my portfolio.</p>
      <p>Send me a nice message!</p>
    </h2>
    <!-- <vee-form
      v-slot="{ resetForm }"
      class="flex flex-col w-full space-y-4"
      @submit="onSubmit"
      :validation-schema="messageSchema"
    >
      <div class="flex flex-col space-y-2">
        <vee-field
          type="text"
          name="name"
          placeholder="Full Name"
          class="border border-gray-300 dark:border-gray-600 p-2 text-lg bg-gray-100 dark:bg-gray-800 rounded focus:outline-none"
        />
        <ErrorMessage class="text-red-500 px-1" name="name" />
      </div>
      <div class="flex flex-col space-y-2">
        <vee-field
          type="email"
          name="email"
          placeholder="E-mail"
          class="border border-gray-300 dark:border-gray-600 p-2 text-lg bg-gray-100 dark:bg-gray-800 rounded focus:outline-none"
        />
        <ErrorMessage class="text-red-500 px-1" name="email" />
      </div>
      <div class="flex flex-col space-y-2">
        <vee-field
          type="text"
          as="textarea"
          rows="4"
          name="message"
          placeholder="Message"
          class="border border-gray-300 dark:border-gray-600 p-2 text-lg bg-gray-100 dark:bg-gray-800 rounded focus:outline-none"
        />
        <ErrorMessage class="text-red-500 px-1" name="message" />
      </div>
      <div class="flex justify-between">
        <button
          @click="resetForm"
          class="py-2 px-4 rounded bg-gray-200 dark:bg-gray-700"
        >
          Clear
        </button>
        <button
          type="submit"
          class="py-2 px-4 rounded bg-blue-400 dark:bg-blue-600 text-white"
        >
          Send
        </button>
      </div>
      <div
        class="p-4 rounded text-white"
        :class="{
          hidden: !showSubmission,
          'bg-green-500': submissionResult && !isInSubmission,
          'bg-red-400': !submissionResult && !isInSubmission,
          'bg-blue-400': isInSubmission,
        }"
      >
        {{ submissionWarning }}
      </div>
    </vee-form> -->
  </div>
</template>
