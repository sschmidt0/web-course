import React from "react";
import { FormModel } from "../../../common/model";
import { Button, Input, Textarea } from "../../../components";
import { UserInfo } from "../contact.model";
import styles from "./form.module.scss";

export interface FormProps {
  form: FormModel;
}

export const Form: React.FC<FormProps> = ({ form }) => {
  const [userInfo, setUserInfo] = React.useState<UserInfo>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange =
    (key: keyof UserInfo) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      console.log(event.target.value);
      setUserInfo((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input
        label={form.name}
        placeholder={form.placeholderName}
        value={userInfo.name}
        onChange={() => handleChange("name")}
      />
      <Input
        label={form.email}
        placeholder={form.placeholderEmail}
        value={userInfo.email}
        onChange={() => handleChange("email")}
      />
      <Textarea
        label={form.message}
        placeholder={form.placeholderMessage}
        value={userInfo.message}
        onChange={() => handleChange("message")}
      />
      <Button
        onClick={() => {}}
        text={form.sendButton}
        className={styles.button}
      />
    </form>
  );
};
