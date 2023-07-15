import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import user from '../../assets/user-image.jpg'
import './Profile.css'
function Profile() {

    const [state, setState] = useState('PI')
    useEffect(() => {
        let headerSelector = document.querySelector('.profileSelector').querySelectorAll('span')
        headerSelector.forEach(item => {
            item.addEventListener('click', () => {
                headerSelector.forEach(item => {
                    item.classList.remove('addBackground')
                })
                item.classList.add('addBackground')
            })
        })
    }, [])

    return (
        <div className='profileContainer'>
            <Header></Header>
            <div className="profileMain">
                <div className="containerProfile">
                    <div className="profileHeader">
                        <div className="sec1">
                            <img src={user}></img>
                            <div>
                                <span>EmpId</span>
                                <h3>Ann <br></br>Rachel</h3>
                                <span>Employee</span>
                            </div>
                        </div>

                        <div className="sec2">
                            <div>
                                <span>status</span>
                                <span>Active</span>
                            </div>
                            <div>
                                <span>Ess Access</span>
                                <span>Active</span>
                            </div>
                        </div>

                        <div className="sec3">
                            <span>Reporting to</span>
                            <div><img src={user} alt="" /><span>Name</span></div>
                            <div><img src={user} alt="" /><span>Name</span></div>
                        </div>
                    </div>
                    <div className="profileSelector">
                        <span className='addBackground' onClick={() => setState('PI')}>Personal Info</span>
                        <span onClick={() => setState('JD')}>Job Details</span>
                        <span onClick={() => setState('BD')}>Bank Details</span>
                    </div>

                    {
                        state === 'PI' ? <div className='profileBodyPI'>
                            <i title='edit' class="fa-solid fa-pen-to-square editBtn"></i>
                            <h3>Personal Information</h3>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                            <div><span>Fist Name</span><span>Ann Rachel</span></div>
                        </div> : ''
                    }

                    {
                        state === 'JD' ? <div className='profileBodyPI'>
                             <i title='edit' class="fa-solid fa-pen-to-square editBtn"></i>
                            <h3>Job Details</h3>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>
                            <div><span>Employee Code</span><span>106283</span></div>

                            <div className="workInfo">
                                <h2>Work Information</h2>
                                <div>
                                    <span>ORG Unit</span>
                                    <span>Hexaware{">"}Mavericks with Hexavarsity</span>
                                </div>
                                <div>
                                    <span>Work Site</span>
                                    <span>Indian{">"}TamilNadu{">"}Chennai{">"}SIRUSREE S</span>
                                </div>
                            </div>
                        </div> : ''
                    }

{
                        state === 'BD' ? <div className='profileBodyPI'>
                             <i title='edit' class="fa-solid fa-pen-to-square editBtn"></i>
                            <h3>Bank Details</h3>
                            <div><span>Name Of Bank</span><span>HDFC</span></div>
                            <div><span>iFSC Code</span><span>HDFC0001504</span></div>
                            <div><span>Name Of Bank</span><span>HDFC</span></div>
                            <div><span>iFSC Code</span><span>HDFC0001504</span></div>
                            <div><span>Name Of Bank</span><span>HDFC</span></div>
                            <div><span>iFSC Code</span><span>HDFC0001504</span></div>
                        </div> : ''
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile