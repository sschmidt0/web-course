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

export interface SendConfirmationProps {
  email: string;
  message: string;
  username: string;
}

const SendConfirmation: React.FC<Readonly<SendConfirmationProps>> = ({
  username: userName,
  message,
  email,
}) => {
  const previewText = `Read ${userName}'s review - ${email}`;

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Preview>{previewText}</Preview>
        <Container style={container}>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>Here's what {userName} wrote</Text>
              <Text style={review}>{message}</Text>
              <Text style={paragraph}>
                Now that the review period is over, we’ve posted {userName}
                ’s review to your Airbnb profile.
              </Text>
              <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                While it’s too late to write a review of your own, you can send
                your feedback to {userName} using your Airbnb message thread.
              </Text>
            </Row>
          </Section>

          <Hr style={hr} />
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

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
