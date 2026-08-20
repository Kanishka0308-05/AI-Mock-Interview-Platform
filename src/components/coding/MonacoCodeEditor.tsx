"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

type Props = {
  initialCode: string;
  language?: string;
};

export default function MonacoCodeEditor({
  initialCode,
  language = "typescript",
}: Props) {
  const [code, setCode] = useState(initialCode);

  return (
    <Editor
      height="70vh"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || "")}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        automaticLayout: true,
        wordWrap: "on",
      }}
    />
  );
}