import './preview.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Preview() {
  const userInfo = useSelector((state) => state.person);
  const navi = useNavigate();
  function movetosearch() {
    navi('/mainpage');
  }
  return (
    <div className="preview-container">
      <button className="back-btn" onClick={movetosearch}>
        Back to Search
      </button>
      <h2 className="preview-title">Application Preview</h2>
      <div className="preview-details">
        <p>
          <strong>Name:</strong> {userInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {userInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {userInfo.phone}
        </p>
        <p>
          <strong>Class 12 Percentage:</strong> {userInfo.class12Percentage}
        </p>
        <p>
          <strong>10 Percentage:</strong> {userInfo.tenPercentage}
        </p>
        <p>
          <strong>Current Education:</strong> {userInfo.currentEducation}
        </p>
        <p>
          <strong>CGPA:</strong> {userInfo.cgpa}
        </p>
        <p>
          <strong>Graduation Completion Date:</strong>{' '}
          {userInfo.graduationCompletionDate}
        </p>
      </div>
    </div>
  );
}

export default Preview;
