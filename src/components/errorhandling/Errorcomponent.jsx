import { useRouteError } from 'react-router-dom';
import './error.css';

function Errorcomponent() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="Errorcontainer">
      <div className="Errormessage">
        {error.status}
        {error.statusText}
        {error.data}
      </div>
    </div>
  );
}

export default Errorcomponent;
