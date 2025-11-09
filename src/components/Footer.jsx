import React from 'react'
import { useTranslation } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-6 text-center text-gray-400 border-t border-white/10 mt-12 bg-black/30">
      {t('footer', { year: new Date().getFullYear() })}
    </footer>
  )
}