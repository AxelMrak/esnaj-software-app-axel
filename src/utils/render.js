import { BackendIcon, ConsultingIcon, DatabaseIcon, DevelopmentIcon, FrontendIcon, HostingIcon, IntegrationIcon, MobileIcon } from '../app/[lng]/components/globals/Icons/Services';

export const renderIconService = (name) => {
	switch (name) {
		case 'full-stack-development':
			return <DevelopmentIcon />;
		case 'consulting':
			return <ConsultingIcon />;
		case 'api-integrations':
			return <IntegrationIcon />;
		case 'backend-app-development':
			return <BackendIcon />;
		case 'hosting':
			return <HostingIcon />;
		case 'frontend-app-development':
			return <FrontendIcon />;
		case 'database-migrations':
			return <DatabaseIcon />;
		case 'mobile-app-development':
			return <MobileIcon />;
		default:
			return <DevelopmentIcon />;
	}
};