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
    { value: '21', label: '54,335.47'},
    { value: '22', label: '56,532.61' },
    { value: '23', label: '58,729.75' },
    { value: '24', label: '60,917.29' },
    { value: '25', label: '63,108.03' },
    { value: '26', label: '65,317.97' },
    { value: '27', label: '67,508.71' },
    { value: '28', label: '70,390.59' },
    { value: '29', label: '73,271.40' },
    { value: '210', label: '76,152.21' },
    { value: '211', label: '79,033.02' },
    { value: '212', label: '81,912.77' },
    { value: '213', label: '84,969.47' },
    { value: '31', label: '55,720.95'},
    { value: '32', label: '57,913.82' },
    { value: '33', label: '60,112.03' },
    { value: '34', label: '62,309.17' },
    { value: '35', label: '64,499.91' },
    { value: '36', label: '66,694.91' },
    { value: '37', label: '68,889.92' },
    { value: '38', label: '71,835.79' },
    { value: '39', label: '74,782.73' },
    { value: '310', label: '77,727.54' },
    { value: '311', label: '80,674.48' },
    { value: '312', label: '83,619.28' },
    { value: '313', label: '86,737.82' },
    { value: '41', label: '57,106.42'},
    { value: '42', label: '59,879.51' },
    { value: '43', label: '61,382.31' },
    { value: '44', label: '63,688.24' },
    { value: '45', label: '65,885.38' },
    { value: '46', label: '68,081.46' },
    { value: '47', label: '70,274.33' },
    { value: '48', label: '73,285.26' },
    { value: '49', label: '76,295.13' },
    { value: '410', label: '79,305.00' },
    { value: '411', label: '82,314.87' },
    { value: '412', label: '85,325.80' },
    { value: '413', label: '88,506.16' },
    { value: '51', label: '58,490.84'},
    { value: '52', label: '60,679.44' },
    { value: '53', label: '62,871.25' },
    { value: '54', label: '65,070.52' },
    { value: '55', label: '67,270.86' },
    { value: '56', label: '69,465.87' },
    { value: '57', label: '71,663.01' },
    { value: '58', label: '74,736.87' },
    { value: '59', label: '77,811.80' },
    { value: '510', label: '80,886.73' },
    { value: '511', label: '83,960.59' },
    { value: '512', label: '87,035.52' },
    { value: '513', label: '90,281.09' },
    { value: '61', label: '60,070.43'},
    { value: '62', label: '62,262.24' },
    { value: '63', label: '64,458.31' },
    { value: '64', label: '66,658.65' },
    { value: '65', label: '68,853.65' },
    { value: '66', label: '71,048.66' },
    { value: '67', label: '73,244.73' },
    { value: '68', label: '76,393.26' },
    { value: '69', label: '79,540.71' },
    { value: '610', label: '82,689.23' },
    { value: '611', label: '85,836.69' },
    { value: '612', label: '88,985.21' },
    { value: '613', label: '92,302.53' },
    { value: '71', label: '61,708.69'},
    { value: '72', label: '63,902.62' },
    { value: '73', label: '66,100.83' },
    { value: '74', label: '68,295.84' },
    { value: '75', label: '70,490.84' },
    { value: '76', label: '72,685.85' },
    { value: '77', label: '74,882.99' },
    { value: '78', label: '78,030.447' },
    { value: '79', label: '81,177.90' },
    { value: '710', label: '84,325.35' },
    { value: '711', label: '87,472.81' },
    { value: '712', label: '90,621.33' },
    { value: '713', label: '94,001.85' }  
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