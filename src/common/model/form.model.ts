export interface FormModel {
  username: string;
  placeholderName: string;
  email: string;
  placeholderEmail: string;
  subject: string;
  placeholderSubject: string;
  message: string;
  placeholderMessage: string;
  sendButton: string;
  sendingButton: string;
}

export type InputType = "username" | "email" | "message";
