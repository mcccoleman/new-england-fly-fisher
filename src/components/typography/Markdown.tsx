import React, { FC } from "react";

interface MarkdownProps {
  html?: string | null | undefined;
}

export const Markdown: FC<MarkdownProps> = ({ html }) => (
  <>
    {html && (
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    )}
  </>
);
