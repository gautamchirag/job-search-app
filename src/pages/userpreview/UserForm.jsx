import { useState } from 'react';
import './userForm.css';

import { useNavigate } from 'react-router-dom';
import { addPerson } from '../../components/redux/personSlice';
import { useDispatch } from 'react-redux';
function UserForm() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    class12Percentage: '',
    tenPercentage: '',
    currentEducation: '',
    cgpa: '',
    graduationCompletionDate: '',
    resume: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPerson(userInfo));
    navi('/preview');
  };

  return (
    <div className="ApplyformCon">
      <div className="Applyform">
        <h2 className="form-title">Please fill out the form to apply. </h2>
        <form onSubmit={handleSubmit} className="user-form">
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userInfo.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="class12Percentage">Class 12 Percentage:</label>
            <input
              type="text"
              id="class12Percentage"
              name="class12Percentage"
              value={userInfo.class12Percentage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tenPercentage">10 Percentage:</label>
            <input
              type="text"
              id="tenPercentage"
              name="tenPercentage"
              value={userInfo.tenPercentage}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="currentEducation">Current Education:</label>
            <input
              type="text"
              id="currentEducation"
              name="currentEducation"
              value={userInfo.currentEducation}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="cgpa">CGPA:</label>
            <input
              type="text"
              id="cgpa"
              name="cgpa"
              value={userInfo.cgpa}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="graduationCompletionDate">
              Graduation Completion Date:
            </label>
            <input
              type="text"
              id="graduationCompletionDate"
              name="graduationCompletionDate"
              value={userInfo.graduationCompletionDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="resume">Resume:</label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Add more fields as needed */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
