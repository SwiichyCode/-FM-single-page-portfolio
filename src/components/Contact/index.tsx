import React, { useState, useRef } from "react";
import { Input } from "@/components/Input";
import { TextArea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import emailjs from "@emailjs/browser";
import * as S from "./styles";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<any>();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setSubmitted(true);

    emailjs
      .sendForm(
        "service_0ov0c3x",
        "template_f3v4ne6",
        form.current,
        "rPcDraGrPEpQxxc1J"
      )
      .then(
        (result) => {
          console.log(result.text);

          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );

    e.target.reset();
  };

  return (
    <S.Container>
      <header>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </header>
      <form ref={form} onSubmit={sendEmail}>
        <Input placeholder="name" type={"text"} name="to_name" required />
        <Input placeholder="email" type={"email"} name="from_name" required />
        <TextArea placeholder="message" name="message" required />
        <div className="button-wrapper">
          <Button text="send message" type="submit" />
        </div>
        {submitted && (
          <p style={{ color: "var(--color-green)" }}>
            Thank you for your message!
          </p>
        )}
        {error && (
          <p style={{ color: "var(--color-red)" }}>
            Sorry, something went wrong. Please try again.
          </p>
        )}
      </form>
    </S.Container>
  );
};
