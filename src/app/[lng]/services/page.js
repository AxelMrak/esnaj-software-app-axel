import React from 'react'
import Services from '../components/Sections/Services'
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng } }) {
    const { t } = await useTranslation(lng);
  return (
    <Services lng={lng} />
  )
}
