import { useNavigate } from 'react-router';

import logo from '@/assets/logo.svg';
import { Head } from '@/client/components/seo';
import { paths } from '@/config/paths';
import { useUser } from '@/lib/auth';
import { CssBaseline } from '@mui/material';
import AppTheme from '@/client/components/shared-theme/AppTheme';
import Directory from '@/client/features/directory/components/Directory';

const LandingRoute = (props: { disableCustomTheme?: boolean }) => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate(paths.app.dashboard.getHref());
    } else {
      navigate(paths.auth.login.getHref());
    }
  };

  return (
    <>
      <Head description="Welcome to Directory" />
      <div className="flex items-center bg-white overflow-y">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Directory />
          </AppTheme>
        </div>
      </div>
    </>
  );
};

export default LandingRoute;
