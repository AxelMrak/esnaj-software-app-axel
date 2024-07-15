import React from 'react'
import ServiceMain from '../../components/pages/ServiceMain'

export default function Page({ params: { lng, slug } }) {

  return (
    <ServiceMain lng={lng} slug={slug} />
  )
}


