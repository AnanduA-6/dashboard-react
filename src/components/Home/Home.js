import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './Home.css'
import user from '../../assets/user-image.jpg'
import CalendarSec from './CalendarSec'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  let token=sessionStorage.getItem('login')
  useEffect(()=>{
    if(token==null){
      navigate('/')
    }
  },[])
  function logout(){
    sessionStorage.removeItem('login')
    navigate('/')
  }
  return (
    <div className='homeMain'>
      <Header></Header>
      <div className='homeRight'>
        <div className='headerHome'>
          <h1>Home</h1>
          <div className='headerRight'>
            <img src={user} alt="" />
            <span>Meera Agarwal</span>
            <i class="fa-solid fa-power-off logoutBtn" onClick={()=>logout()}></i>
          </div>
        </div>
        <div className="homeBottom">
          <div className='homeBottomLeft'>
            <div className="projectsTab">
              <p>Projects</p>
              <div className='circleSec'>
                <div class="radial-01 radial-three-quarters">
                  <span class="radial-01-number">
                    75<span class="radial-01-syb"><sup>%</sup></span>
                  </span>
                  <span class="radial-01-border-r"></span>
                  <span class="radial-01-border-l"></span>
                </div>
              </div>
              <ul style={{ display: 'flex' }}>
                <li>Completed</li>
                <li>In progress</li>
              </ul>
            </div>
            <div className='aweTab'>
              <div className="leftSec">
                <h2>AWE Points</h2>
                <span>Achievements</span>
                <span className='certi'><i class="fa-solid fa-circle-check"></i>Certificate 1</span>
                <span className='certi'><i class="fa-solid fa-circle-check"></i>Certificate 2</span>
                <span className='certi'><i class="fa-solid fa-circle-check"></i>Certificate 3</span>
                <span className='viewAllBtn'>View All</span>
              </div>
              <div className="rightSec">
                <div className='infoIcon'><i class="fa-solid fa-info"></i></div>
                <div className='pointsSec'><span>1200</span><span>Points</span></div>
                
              </div>
            </div>
            

            <div className='superiorTabMain'>
            <div className="superiorTab">
              <p>Project Managers</p>
              <span>Project Name</span>
              <span>JUL-DEC 2023</span>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className='managerImg'>
                  <img src={user} alt="" />
                  <img src={user} alt="" />
                </div>
                <i class="fa-solid fa-chevron-right"></i>
              </div>


            </div>
            </div>
            

            <div className='taxTab'>
              <div><span>Tax Summary</span> <span className='faq'>Faq<i class="fa-solid fa-question"></i></span></div>
              <div><span className='taxAmount'>₹53,832</span></div>
              <div className='taxBarMain'>
                <div className='taxBar'>
                  <span className='minBar'></span>
                  <span className='maxBar'></span>
                </div>
                <div className='taxAmnt'>
                  <div>Paid:<span>₹4,456</span></div>
                  <div>Remaining:<span style={{ color: '#e81919' }}>₹43,456</span></div>
                </div>
              </div>
            </div>

            
          </div>

          <div className="homeBottomRight">
            <div className="calendarTab">
              <CalendarSec></CalendarSec>
            </div>
          </div>







        </div>
        <div className="leaveSection">
          
          <div className='leaveBox sick'>
            Sick Leave
            <div className='circleSec'>
                <div class="radial-01 radial-three-quarters">
                  <span class="radial-01-number">
                    03<span style={{fontSize:'10px'}}>Days</span>
                  </span>
                  <span class="radial-01-border-r"></span>
                  <span class="radial-01-border-l"></span>
                </div>
              </div>
          </div>
          <div className='leaveBox pri'>
            Privileged Leave
            <div className='circleSec'>
                <div class="radial-01 radial-three-quarters">
                  <span class="radial-01-number">
                    02<span style={{fontSize:'10px'}}>Days</span>
                  </span>
                  <span class="radial-01-border-r"></span>
                  <span class="radial-01-border-l"></span>
                </div>
              </div>
          </div>
          <div className='leaveBox casual'>
            Casual Leave
            <div className='circleSec'>
                <div class="radial-01 radial-three-quarters">
                  <span class="radial-01-number">
                    05<span style={{fontSize:'10px'}}>Days</span>
                  </span>
                  <span class="radial-01-border-r"></span>
                  <span class="radial-01-border-l"></span>
                </div>
              </div>
          </div>
          <div className='leaveBox floater'>
            Floater Holiday
            <div className='circleSec'>
                <div class="radial-01 radial-three-quarters">
                  <span class="radial-01-number">
                    04<span style={{fontSize:'10px'}}>Days</span>
                  </span>
                  <span class="radial-01-border-r"></span>
                  <span class="radial-01-border-l"></span>
                </div>
              </div>
          </div>
          <div className="BtnSecLeave">
            <span>Apply Leave</span>
            <span>Pending Requests</span>
            <span>More Details</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home