import "./helloClass.css";
import React, { useState} from 'react';


function Practice() {

    let [academicInfo, setAcademicInfo] = useState({
        startYear: '',
        endYear: '',
        sessionTitle: '',
        semester: ''
    });

    let [collectedAcademicInfo, setCollectedAacdemicInfo] = useState([]);

    let [errorMesaage, setErrorMessage] = useState('');

    function getStartYearValue(e){
        setAcademicInfo(academicInfo = {...academicInfo, startYear: e.target.value})
        console.log(academicInfo);
    }
    function getEndYearValue(e){
        setAcademicInfo(academicInfo = {...academicInfo, endYear: e.target.value})
        console.log(academicInfo);
    }
    function getSessionTitleValue(e) {
        setAcademicInfo(academicInfo = {...academicInfo, sessionTitle: e.target.value})
        console.log(academicInfo);
    }
    function getSemesterValue(e){
        setAcademicInfo(academicInfo = {...academicInfo, semester: e.target.value})
        console.log(academicInfo);
    }

    function finalSubmission(){
        let beginYear = Number(academicInfo.startYear)
        let endingYear = Number(academicInfo.endYear)
        if(endingYear < beginYear || beginYear > endingYear || beginYear === endingYear || beginYear === 0 || endingYear === 0){
            setErrorMessage('Check the input for your Start Year and End Year and Input a valid start year or end year');
            return false;
        }
        if(academicInfo.sessionTitle === ''){
            setErrorMessage('Session input is empty, please input a valid session title')
            return false;
        }
        if(academicInfo.semester === ''){
            setErrorMessage('Please check your semester input and input a valid semester')
            return false;
        }
        else{
            setErrorMessage('')
        }
        setCollectedAacdemicInfo(collectedAcademicInfo = [...collectedAcademicInfo, academicInfo])
        localStorage.setItem('My Student Academic Info', JSON.stringify(collectedAcademicInfo))
        console.log(collectedAcademicInfo);
    }

    return ( 
        <div className="parent">
            <h1>ACADEMIC CALENDAR</h1>
            <div className="error_message">{errorMesaage}</div>
            <div className="each_input_div">
                <label>Start Year: </label>
                <select className="start_year_select" onChange={(e) => {getStartYearValue(e)}}>
                    <option value="0">--Please select a Year--</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
            </div>
            <div className="each_input_div">
                <label>End Year: </label>
                <select className="start_year_select" onChange={(e) => {getEndYearValue(e)}}>
                    <option value="0">--Please select a Year--</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                </select>
            </div>
            <div className="each_input_div">
                <label>Session Title: </label>
                <input className="session_input" type="text" onChange={(e) => {getSessionTitleValue(e)}}/>
            </div>
            <div className="each_input_div">
                <label>Start Year: </label>
                <select className="start_year_select" onChange={(e) => {getSemesterValue(e)}}>
                    <option value="0">--Please select A semester--</option>
                    <option value="1st">1st Semester</option>
                    <option value="2nd">2nd Semester</option>
                </select>
            </div>
            
            <button onClick={finalSubmission}>Submit</button>
        </div>
     );
}

export default Practice;