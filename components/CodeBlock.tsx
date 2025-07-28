'use client'

import { useState } from 'react';
import { IconCopy } from '@tabler/icons-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeBlockProps = {
  code: string;
  language?: string;
};

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-lg overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70 rounded px-2 py-1 flex items-center text-xs"
      >
        <IconCopy size={16} className="mr-1" />
        {copied ? "Copied!" : "Copy"}
      </button>

      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{
          padding: '1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          background: 'rgb(23, 23, 23)',
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
