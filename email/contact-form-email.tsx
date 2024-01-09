import React from "react";
import {
    Html,
    Head,
    Body,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>
                You Received A New Message From The Portfolio Contact Form
            </Preview>
            <Tailwind>
                <Body className="bg-gray-50">
                    <Container>
                        <Section className="my-10 px-10 py-5 bg-white">
                            <Heading className="leading-tight text-black">
                                You Received A New Message From The Portfolio
                                Contact Form
                            </Heading>
                            <Text className="text-black">{message}</Text>
                            <Hr />
                            <Text className="text-black font-medium">
                                The sender's email is: {senderEmail}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
