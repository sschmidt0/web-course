import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { EMAIL_MESSAGE } from "@/db/email";
import { Language } from "@/common/model/language";

export interface SendConfirmationProps {
  email: string;
  message: string;
  username: string;
  language: Language;
}

const SendConfirmation: React.FC<Readonly<SendConfirmationProps>> = ({
  username = "Sarah Schmidt",
  message = "Lorem ipsum",
  email = "sakschmidt@gmail.com",
  language = "catalan",
}) => {
  const subject = EMAIL_MESSAGE[language]?.subject;
  const title = EMAIL_MESSAGE[language]?.title;
  const greeting = EMAIL_MESSAGE[language]?.greeting;
  const thanksText = EMAIL_MESSAGE[language]?.thanksText;
  const userMessage = EMAIL_MESSAGE[language]?.userMessage;
  const userEmail = EMAIL_MESSAGE[language]?.userEmail;
  const thanks = EMAIL_MESSAGE[language]?.thanks;

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Preview>{subject}</Preview>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>{title}</Text>
              <Text style={link}>
                www.sarahschmidt.cat | www.sarahschmidt.es
              </Text>
              <Text style={paragraph}>
                {greeting} {username} 👋🏻
              </Text>
              <Text style={paragraph}>{thanksText}</Text>
              <Hr style={hr} />
              <Text style={paragraph}>{userMessage}</Text>
              <Text style={review}>{message}</Text>
              <Text style={paragraph}>
                {userEmail} {email}
              </Text>
              <Hr style={hr} />
              <Text style={{ ...paragraph, paddingBottom: "8px" }}>
                {thanks},
              </Text>
              <Text style={{ ...signature, paddingBottom: "16px" }}>
                Sarah Schmidt
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SendConfirmation;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const link = {
  paddingBottom: "24px",
  fontSize: "18px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#634aff",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f0edff",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#634aff",
  margin: "20px 0",
};

const signature = {
  fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
  fontSize: "20px",
};
