'use client'

import CodeBlock from '@/components/CodeBlock'

export default function Page() {
	const componentCode = `'use client'

import { useState } from 'react'
import { IconCopy } from '@tabler/icons-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className='relative rounded-lg overflow-hidden'>
      <button
        onClick={handleCopy}
        className='absolute top-2 right-2 z-10 text-white bg-black/50 hover:bg-black/70 rounded px-2 py-1 flex items-center text-xs'
      >
        <IconCopy size={16} className="mr-1" />
        {copied ? 'Copied!' : 'Copy'}
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
  )
}`

	const snippetCode = `'use client'

import CodeBlock from '@/components/CodeBlock'

export function page() {
  const sample = \`function greet(name) {
  return 'Hello, ' + name
}\`

  return (
    <div>
      <CodeBlock code={sample} language='javascript'  />
    </div>
  )
}`

	const sample = `function greet(name) {
  return 'Hello, ' + name
}`

	return (
		<div className='min-h-screen bg-zinc-950 text-white px-6 py-10 space-y-10 '>

			<div className='text-center space-y-2'>
				<h1 className='text-4xl font-bold'>Component Showcase</h1>
			</div>

			<section className='max-w-4xl mx-auto'>
				<CodeBlock code={sample} language='javascript' />
			</section>

			<div className='text-center space-y-2'>
				<p className='text-neutral-400'>Below is the Code Block component with code snippet</p>
			</div>

			<div className='max-w-4xl mx-auto'>
				<CodeBlock code={componentCode} language='javascript' />
			</div>

			<div className='text-center space-y-2'>
				<p className='text-neutral-400'>Usage of Component</p>
			</div>

			<div className='max-w-4xl mx-auto'>
				<CodeBlock code={snippetCode} language='javascript' />
			</div>

		</div>
	)
}
