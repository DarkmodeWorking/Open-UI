// app/components/page.tsx
'use client'

import CodeBlock from "@/components/CodeBlock";
import { Footer } from "@/components/Designs/Footer";

export default function Page() {
  const componentCode = `'use client'

import React from 'react'
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTwitch,
  IconBrandReddit,
} from '@tabler/icons-react'
import { motion } from 'framer-motion'

export function Footer() {
  const socialLinks = [
    { icon: IconBrandGithub, href: 'https://github.com', color: 'text-white' },
    { icon: IconBrandInstagram, href: 'https://instagram.com', color: 'text-pink-400' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com', color: 'text-blue-500' },
    { icon: IconBrandX, href: 'https://x.com', color: 'text-teal-400' },
    { icon: IconBrandYoutube, href: 'https://youtube.com', color: 'text-red-400' },
    { icon: IconBrandDiscord, href: 'https://discord.com', color: 'text-indigo-400' },
    { icon: IconBrandTwitch, href: 'https://twitch.tv', color: 'text-purple-400' },
    { icon: IconBrandReddit, href: 'https://reddit.com', color: 'text-orange-400' },
  ]

  return (
    <footer className='pt-20'>
      <motion.div
        className='flex items-center justify-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className='p-4 bg-neutral-900 rounded-3xl'>
          <div className='flex gap-4'>
            {socialLinks.map(({ icon: Icon, href, color }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -5, scale: 1.2, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='lg:w-10 lg:h-10 w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center'
              >
                <Icon size={20} className={color} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  )
}`;

const snippetCode = `'use client'

import { Footer } from "@/components/Footer";

export function page() {
  return (
    <div>
      <Footer />
    </div>
  )
}`

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10 space-y-10 ">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Component Showcase</h1>

      </div>

      {/* Render the Footer */}
      <Footer />
      <div className="text-center space-y-2">
        <p className="text-neutral-400">Below is the Footer component with code snippet</p>
      </div>
      {/* Render the CodeBlock */}
      <div className="max-w-4xl mx-auto">
        <CodeBlock code={componentCode} language="javascript" />
      </div>
      <div className="text-center space-y-2">
        <p className="text-neutral-400">Usage of Component</p>
      </div>
      {/* Render the CodeBlock */}
      <div className="max-w-4xl mx-auto">
        <CodeBlock code={snippetCode} language="javascript" />
      </div>
      
    </div>
  );
}
