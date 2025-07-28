'use client'

import {
  IconRocket,
  IconCode,
  IconShieldCheck,
  IconSparkles
} from '@tabler/icons-react'

export default function Home() {
  return (
    <main className='bg-zinc-950 text-white min-h-screen'>

      <section className='max-w-6xl mx-auto px-6 py-24 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Build Stunning Interfaces with <br /> <span className='text-blue-500'>Open-UI</span>
        </h1>
        <p className='text-zinc-400 text-lg md:text-xl mb-10'>
          A modern component library that helps you launch faster with beautifully crafted React + Tailwind UI blocks.
        </p>
        <a href="components">
          <button className='bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold text-white text-lg cursor-pointer'>
            Get Started
          </button>
        </a>
      </section>

      <section className='max-w-6xl mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why Choose Open-UI?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          <FeatureCard
            icon={<IconRocket size={36} className='text-blue-500' />}
            title='Launch Fast'
            description='Ready-to-use components to speed up your development process.'
          />
          <FeatureCard
            icon={<IconCode size={36} className='text-green-500' />}
            title='Developer Friendly'
            description='Clean code structure and fully customizable components.'
          />
          <FeatureCard
            icon={<IconShieldCheck size={36} className='text-purple-500' />}
            title='Secure & Stable'
            description='Well-tested components for a production-ready experience.'
          />
          <FeatureCard
            icon={<IconSparkles size={36} className='text-pink-500' />}
            title='Beautiful Design'
            description='Modern, aesthetic, and dark mode-friendly UI blocks.'
          />
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className='bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-lg transition text-center'>
      <div className='mb-4 flex justify-center'>{icon}</div>
      <h4 className='text-xl font-semibold mb-2'>{title}</h4>
      <p className='text-zinc-400 text-sm'>{description}</p>
    </div>
  )
}
