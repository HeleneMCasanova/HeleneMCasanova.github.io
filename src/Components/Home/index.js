import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Dropdown from '../Dropdowns/Dropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import './home.css';

const options = [
    { value: '0', label: 'Bachelors' },
    { value: '1', label: 'Bachelors +15' },
    { value: '2', label: 'Masters' },
    { value: '3', label: 'Masters +15' },
    { value: '4', label: 'Masters +30' },
    { value: '5', label: 'Masters +45' },
    { value: '6', label: 'Masters +60' },
    { value: '7', label: 'Doctorate' }
];

const options2 = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' }
];


class Home extends Component {
    
    state = { degree: options[0], yearsActive: options2[0] }

    callbackFunctionA = (childData) => {
        this.setState({degree: childData})
    }

    callbackFunctionB = (childData) => {
        this.setState({yearsActive: childData})
    }
   

    render ()  {
        const coordinate = this.state.degree.value + this.state.yearsActive.value;

        return (
            <div className='mainContainer'>
                
                <div className='mainTextContainer'>
                    <p className='mainText'>The TEACHER SALARY ESTIMATOR is a tool for prospective teachers interested in the Salem Public School System. Here, a full annual estimated salary may be calculated.</p>

                    <p className='mainText'>This tool is for estimation purposes only. It is not a binding agreement. Final salary determination is dependent upon the receipt of verification of employment and OFFICIAL transcripts. Such documentation is to be filed in the Office of Human Resources within thirty (30) days of the first day of employment.</p>

                    <p className='mainText'>INSTRUCTIONS: To calculate a TOTAL annual salary, including the two benefits, please answer the two questions below. When completed, click the 'DISPLAY RESULTS' button, and the full annual salary will be calculated.</p>


                </div>

                <div className='mainDropdownContainer'>
                    
                    <div className='dropdownTextContainerOne'>
                        <span className='dropdownText'>What is the highest degree (plus graduate-level credits) have you earned? </span>
                       
                        <Dropdown options={options} parentCallback = {this.callbackFunctionA}/>
                       

                    </div>

                    <div className='dropdownTextContainerTwo'>
                        <span className='dropdownText'>Years of full-time teaching experience?</span>

                        <Dropdown options={options2} parentCallback = {this.callbackFunctionB}/>
                        
                    </div>
                </div>

                <div className='displayResultContainer'>
                <Link to={`/Results/_${coordinate}`} message={this.state}><Button variant="secondary">Display Results</Button></Link>
                </div>

            </div>
            );
        }
}


export default Home;