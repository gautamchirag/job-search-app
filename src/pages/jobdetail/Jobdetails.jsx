// import { useEffect } from 'react';
import './jobdetails.css';
import { CiLocationOn } from 'react-icons/ci';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Jobdetails() {
  const data = useSelector((state) => state.job.job);
  const navi = useNavigate();
  function handleclick() {
    navi('/applyform');
  }

  return (
    <section className="JobDetails">
      {Object.keys(data).length > 0 && (
        <div className="job-detail-sec1">
          <h2>{data.title}</h2>
          <h3>{data.company}</h3> <span>4.3 Reviews</span>
          <span>
            <CiLocationOn className="location-icon" />
            {data.location}
          </span>
          <span>{data.postDate}</span>
          <div className="btn-detail">
            <button className="apply-btn" onClick={handleclick}>
              Apply Here
            </button>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="apply-btn"
            >
              Visit Company Site
            </a>
          </div>
        </div>
      )}
      <div className="job-detail-sec2">
        <h3>Job Description :</h3>
        <div
          dangerouslySetInnerHTML={{ __html: data.originalPosting }}
          className="renderdata"
        ></div>
        <div className="summary">
          <h3>Summary :</h3>
          {data.summary}
        </div>
      </div>
    </section>
  );
}

export default Jobdetails;
