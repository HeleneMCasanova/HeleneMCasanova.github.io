import React, { Component } from 'react';

import './results.css';

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
    { value: '13', label: '13'}
];

const calculated = [
    { value: '01', label: '51,375.73'},
    { value: '02', label: '53,571.80' },
    { value: '03', label: '55,757.21' },
    { value: '04', label: '57,958.62' },
    { value: '05', label: '60,152.56' },
    { value: '06', label: '62,346.50' },
    { value: '07', label: '64,540.44' },
    { value: '08', label: '67,283.66' },
    { value: '09', label: '70,024.75' },
    { value: '010', label: '72,766.91' },
    { value: '011', label: '75,509.07' },
    { value: '012', label: '78,250.16' },
    { value: '013', label: '81,168.72' },
    { value: '11', label: '52,752.68'},
    { value: '12', label: '54,953.01' },
    { value: '13', label: '57,140.56' },
    { value: '14', label: '59,337.69' },
    { value: '15', label: '61,533.77' },
    { value: '16', label: '63,729.84' },
    { value: '17', label: '65,926.98' },
    { value: '18', label: '68,734.20' },
    { value: '19', label: '71,540.35' },
    { value: '110', label: '74,347.57' },
    { value: '111', label: '77,153.72' },
    { value: '112', label: '79,962.01' },
    { value: '113', label: '82,942.55' },
    { value: '21', label: 'test'},
    { value: '22', label: '1' },
    { value: '23', label: '2' },
    { value: '24', label: '3' },
    { value: '25', label: '4' },
    { value: '26', label: '5' },
    { value: '27', label: '6' },
    { value: '28', label: '7' },
    { value: '29', label: '8' },
    { value: '210', label: '9' },
    { value: '211', label: '10' },
    { value: '212', label: '11' },
    { value: '213', label: '12' },
    { value: '31', label: 'test'},
    { value: '32', label: '1' },
    { value: '33', label: '2' },
    { value: '34', label: '3' },
    { value: '35', label: '4' },
    { value: '36', label: '5' },
    { value: '37', label: '6' },
    { value: '38', label: '7' },
    { value: '39', label: '8' },
    { value: '310', label: '9' },
    { value: '311', label: '10' },
    { value: '312', label: '11' },
    { value: '313', label: '12' },
    { value: '41', label: 'test'},
    { value: '42', label: '1' },
    { value: '43', label: '2' },
    { value: '44', label: '3' },
    { value: '45', label: '4' },
    { value: '46', label: '5' },
    { value: '47', label: '6' },
    { value: '48', label: '7' },
    { value: '49', label: '8' },
    { value: '410', label: '9' },
    { value: '411', label: '10' },
    { value: '412', label: '11' },
    { value: '413', label: '12' },
    { value: '51', label: 'test'},
    { value: '52', label: '1' },
    { value: '53', label: '2' },
    { value: '54', label: '3' },
    { value: '55', label: '4' },
    { value: '56', label: '5' },
    { value: '57', label: '6' },
    { value: '58', label: '7' },
    { value: '59', label: '8' },
    { value: '510', label: '9' },
    { value: '511', label: '10' },
    { value: '512', label: '11' },
    { value: '513', label: '12' },
    { value: '61', label: 'test'},
    { value: '62', label: '1' },
    { value: '63', label: '2' },
    { value: '64', label: '3' },
    { value: '65', label: '4' },
    { value: '66', label: '5' },
    { value: '67', label: '6' },
    { value: '68', label: '7' },
    { value: '69', label: '8' },
    { value: '610', label: '9' },
    { value: '611', label: '10' },
    { value: '612', label: '11' },
    { value: '613', label: '12' },
    { value: '71', label: 'test'},
    { value: '72', label: '1' },
    { value: '73', label: '2' },
    { value: '74', label: '3' },
    { value: '75', label: '4' },
    { value: '76', label: '5' },
    { value: '77', label: '6' },
    { value: '78', label: '7' },
    { value: '79', label: '8' },
    { value: '710', label: '9' },
    { value: '711', label: '10' },
    { value: '712', label: '11' },
    { value: '713', label: '12' }  
];

class Results extends Component {

    render ()  {
        var str = window.location.href;
        var getCoordinate = str.slice(str.indexOf('_') + 1);
        var xCoor = Number(getCoordinate.charAt(0));
        var yCoor = Number(getCoordinate.substring(1, (getCoordinate.length)));
        var getIndex = (13*xCoor) + (yCoor-1);

        console.log(getCoordinate);
        console.log(getIndex);
      
        return (
            <div className = 'mainContainer'>

                <div className='resultWrapper'>
                    <strong>
                        <h5>The ESTIMATED SALARY for a person having:</h5>
                    </strong>
                    <br></br>
                    <div className='resultContainer'>
                        <h5>Educational Degree</h5>
                        <h5>{options[xCoor].label}</h5>
                    </div>
                    <div className='resultContainer'>
                        <h5>Years of Experience</h5>
                        <h5>{options2[yCoor-1].label}</h5>
                    </div>
                    <div className='resultContainer'>
                        <h5>Base Salary</h5>
                        <h5>${calculated[getIndex].label}</h5>
                    </div>

                    <div className='resultContainer'>
                        <h5>Pay for two PD days</h5>
                        <h5>?</h5>
                    </div>
                    <div className='resultContainer'>
                        <h5>Pay for 5 days sick time</h5>
                        <h5>?</h5>
                    </div>

                </div>

                <div className='applicationContainer'>
                    <strong>
                        <p>Application Process:</p>
                    </strong>
                    <p>Submit applications throught TalentEd</p>
                    <p>Applications MUST include the following:</p>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Results;