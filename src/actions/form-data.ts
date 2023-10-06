export const submitFormData = (formData: FormData) =>
  formData.get("name") as string;
