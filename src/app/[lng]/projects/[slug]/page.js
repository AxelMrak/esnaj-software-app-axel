import React from 'react';
import ProjectMain from '../../components/pages/ProjectMain';

export default function Page({ params: { lng, slug } }) {
	return <ProjectMain lng={lng} slug={slug} />;
}
