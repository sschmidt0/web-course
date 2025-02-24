export interface FormModel {
  name: string;
  placeholderName: string;
  email: string;
  placeholderEmail: string;
  subject: string;
  placeholderSubject: string;
  message: string;
  placeholderMessage: string;
  sendButton: string;
}

export type InputType = "name" | "email" | "message";
