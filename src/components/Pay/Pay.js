import React, { useEffect, useState } from 'react'
import './pay.css'
import Header from '../Header/Header'
import paySlip from '../../assets/pay-slip.jpeg'
import { useNavigate } from 'react-router-dom'
function Pay() {
    const navigate = useNavigate()
    let token = sessionStorage.getItem('login')
    useEffect(() => {
        if (token == null) {
            navigate('/')
        }
    }, [])
    const [state, setState] = useState('SS')
    const [view, setView] = useState(false)
    const [viewPaySlip, setViewPaySlip] = useState(false)
    const [error, setError] = useState('Please select a date')
    useEffect(() => {





        let headerSelector = document.querySelector('.payHeader').querySelectorAll('span')
        headerSelector.forEach(item => {
            console.log(item)
            item.addEventListener('click', () => {
                headerSelector.forEach(item => {
                    item.classList.remove('addUnderLine')
                })
                item.classList.add('addUnderLine')
            })
        })
    }, [])

    function viewMaker() {

        let month = document.querySelector('.selectMonth').value;
        let year = document.querySelector('.selectYear').value
        if (month != 'null' && year != 'null') {
            setError('Unavailable')
        }
        if (year === '2023') {
            if (month === 'June' || month === 'July') {
                setViewPaySlip(true)
            }
            else {
                setViewPaySlip(false)
            }
        }
    }

    function downloadImage() {
        let month = document.querySelector('.selectMonth').value;
        let year = document.querySelector('.selectYear').value
        if (year === '2023') {
            if (month === 'June' || month === 'July') {
                // Get the image element
                var imageElement = document.querySelector(".payslip");

                // Create a link element
                var link = document.createElement("a");

                // Set the href and download attributes
                link.href = imageElement.src;
                link.download = "image.jpg";

                // Simulate a click on the link to start the download
                link.click();
            }

        }

    }

    return (
        <div className='payContainer'>
            <Header></Header>
            <div className='payMain'>
                <div className='containerPay'>
                    <div className="topSec">
                        <h2>My Pay</h2>
                        <div><span style={{ marginLeft: '2rem' }}>Monthly CTC:</span><span>2000</span></div>
                        <div><span style={{ marginLeft: '2rem' }}>Yearly CTC:</span><span>2000</span></div>
                        <div style={{ columnGap: '10rem' }}>
                            <div><span style={{ marginLeft: '2rem' }}>Earnings:&nbsp;&nbsp;&nbsp;</span><span>2000</span></div>
                            <div><span>Deduction:&nbsp;&nbsp;&nbsp;</span><span>2000</span></div>
                        </div>




                    </div>
                    <div className='payHeader'>
                        <span className='addUnderLine' onClick={() => setState('SS')}>Salary Structure</span>
                        <span onClick={() => setState('PS')}>PaySlips</span>
                        <span onClick={() => setState('AE')}>Annual Earnings</span>
                    </div>
                    {state === 'SS' ? <div className='payBodySS'>
                        <div><span>Fixed</span> <span>1672</span></div>
                        <div><span>Basic</span> <span>23432</span></div>
                        <div><span>HRA</span> <span>2343</span></div>
                        <div><span>Special_Allowance</span> <span>23432</span></div>
                        <div><span>GRPMED</span> <span>2343</span></div>
                        <div><span>Individual_Variable_Pay1</span> <span>23432</span></div>
                        <div><span>Retirals</span> <span>2323</span></div>
                        <div><span>Employer_PF</span> <span>2322</span></div>
                        <div><span>GRATTY</span> <span>123432</span></div>
                    </div> : ''}
                    {state === 'PS' ? <div className="payBodyPS" >
                        <h2>Salary Slip</h2>
                        <div className='selectorSS'>
                            <div>
                                <label htmlFor="Select Year">Select Year</label>
                                <select className='selectYear' name="" id="" onChange={() => viewMaker()}>
                                    <option value="null">Select Year</option>
                                    <option value="2023">2023</option>
                                    <option value="">2022</option>
                                    <option value="">2021</option>
                                    <option value="">2020</option>
                                    <option value="">2019</option>
                                    <option value="">2018</option>
                                    <option value="">2017</option>
                                    <option value="">2016</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="Select Year">Select Month</label>
                                <select className='selectMonth' name="" id="" onChange={() => viewMaker()}>
                                    <option value="null">Select Month</option>
                                    <option value="">January</option>
                                    <option value="">February</option>
                                    <option value="">March</option>
                                    <option value="">April</option>
                                    <option value="">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="">August</option>
                                    <option value="">September</option>
                                    <option value="">October</option>
                                    <option value="">November</option>
                                    <option value="">December</option>
                                </select>
                            </div>

                        </div>
                        <div className='viewSec'>

                            <span className='viewBtn' style={{ color: view ? 'blue' : 'black' }} onClick={() => setView(!view)}><i class="fa-solid fa-eye"></i>View</span>
                            <span onClick={() => downloadImage()}><i class="fa-solid fa-download"></i>Download</span>

                        </div>
                        {view ? <div className="paySlipViewer">
                            {viewPaySlip ? <img className='payslip' src={paySlip} alt="" /> : <h2>{error}</h2>}


                        </div> : ''}



                    </div> : ''}
                    {state === 'AE' ? <div>
                        Annual Earnings
                    </div> : ''}

                </div>
            </div>
        </div>
    )
}

export default Pay