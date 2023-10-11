import { Navigate } from 'react-router-dom';
import Mainpage from '../input/Mainpage';
import Jobdetails from '../../pages/jobdetail/Jobdetails';

import { useSelector } from 'react-redux';
import UserForm from '../../pages/userpreview/UserForm';
import Preview from '../../pages/previw/Preview';

function ProtectedRoutes({ page }) {
  const isLoggedIn = useSelector((state) => state?.auth?.user?.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/register" />;
  }
  if (page === 'mainpage') {
    return <Mainpage />;
  }
  if (page === 'jobdetail') {
    return <Jobdetails />;
  }
  if (page === 'applyform') {
    return <UserForm />;
  }
  if (page === 'preview') {
    return <Preview />;
  }

  return <Navigate to="/notfound" />;
}

export default ProtectedRoutes;
