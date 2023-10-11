import { useState } from 'react';
import './mainpage.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillBuildingFill } from 'react-icons/bs';
import { fetch } from '../fetch/fetch';
import { fetchJob } from '../fetch/fetchjob';
import { useDispatch } from 'react-redux';
import { addDetails } from '../redux/Slicedetail';
import { useNavigate } from 'react-router-dom';

function Mainpage() {
  const dispatch = useDispatch();
  const navi = useNavigate();

  const Baseurl = import.meta.env.VITE_REACT_APP_BASE_URL;
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  async function search() {
    try {
      const res = await fetch(input);
      setResult(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function jobDetailSearch(slug) {
    try {
      const jobUrl = `${Baseurl}${slug}`;
      const response = await fetchJob(jobUrl);
      dispatch(addDetails(response));
      navi('/jobdetail');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="Mainpage">
      <div className="Input-div">
        <span className="input-head">Enter the languages to find a Job :</span>
        <div className="main-input-div">
          <input
            type="text"
            placeholder="Enter the required details"
            className="input-lan"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <AiOutlineSearch className="search-icon" />
          <button className="search-btn" onClick={search}>
            Search
          </button>
        </div>
      </div>
      <div className="input-data-section">
        {result?.data?.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <span>{item.postDate}</span>
              <h3>{item.title}</h3>
              <span>{item.company}</span>
            </div>
            <div>
              <button
                className="card-btn"
                onClick={() => jobDetailSearch(item.slug)}
              >
                View Details
              </button>
            </div>
            <BsFillBuildingFill className="home-icon" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Mainpage;
