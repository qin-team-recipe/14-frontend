"use client";

import TextareaAutosize from "react-textarea-autosize";

export function Textarea(props) {
  return <TextareaAutosize minRows={2} {...props} />;
}
