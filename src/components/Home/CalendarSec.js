import React, { useEffect } from 'react'
import './Home.css'
function CalendarSec() {
    useEffect(() => {
        const daysTag = document.querySelector(".days");
        const currentDate = document.querySelector(".current-date");
        const prevNextIcon = document.querySelectorAll(".icons span");

        let currYear = new Date().getFullYear();
        let currMonth = new Date().getMonth();

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const renderCalendar = () => {
            const date = new Date(currYear, currMonth, 1);
            let firstDayofMonth = date.getDay();
            let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
            let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
            let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

            let liTag = "";

            for (let i = firstDayofMonth; i > 0; i--) {
                liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
            }

            for (let i = 1; i <= lastDateofMonth; i++) {
                let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
                liTag += `<li class="${isToday}">${i}</li>`;
            }

            for (let i = lastDayofMonth; i < 6; i++) {
                liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
            }

            currentDate.innerText = `${months[currMonth]} ${currYear}`;
            daysTag.innerHTML = liTag;
        };

        renderCalendar();

        prevNextIcon.forEach(icon => {
            icon.addEventListener("click", () => {
                currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

                if (currMonth < 0 || currMonth > 11) {
                    currYear = icon.id === "prev" ? currYear - 1 : currYear + 1;
                    currMonth = currMonth < 0 ? 11 : 0;
                }

                renderCalendar();
            });
        });
    }, [])

    return (
        <div class="wrapper">
            <header>
                <p class="current-date"></p>
                <div class="icons">
                    <span id="prev">
                    <i class="fa-solid fa-chevron-left"></i>
                    </span>

                    <span id="next">
                    <i class="fa-solid fa-chevron-right"></i>
                    </span>
                </div>
            </header>

            <div class="calendar">
                <ul class="weeks">
                    <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                </ul>
                <ul class="days"></ul>
            </div>

            <div className="calendarBottom">
                <ul>
                <li>Today</li>
                    <li>Leaves taken(1)</li>
                    <li>Work from home(1)</li>
                    <li>Holidays(2)</li>
                </ul>
                    
                
            </div>
        </div>
    )
}

export default CalendarSec