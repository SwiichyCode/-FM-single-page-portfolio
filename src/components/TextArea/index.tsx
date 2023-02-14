import React, { Fragment } from "react";
import { StyledInput, StyledLine } from "@/components/Input";

import styled from "styled-components";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string | null;
}

export const TextArea = ({ error, ...props }: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <StyledTextArea as={"textarea"} {...props} />
      <StyledLine error={error} />
    </TextAreaWrapper>
  );
};

const TextAreaWrapper = styled.div``;

const StyledTextArea = styled(StyledInput).attrs({ as: "textarea" })`
  height: 10.7rem;
  resize: none;
`;
