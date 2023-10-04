export const submitFormData = (formData: FormData) =>
  formData.get("name")!.toString();
