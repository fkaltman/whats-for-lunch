import React from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";


function Calendar(){

  const showAlert1 = () => {
    Swal.fire({
      title: 'Chicken Francaise',
      html: '',
      footer: "Monday, April 3<sub>rd</sub>"
    })
  }

  const showAlert2 = () => {
    Swal.fire({
      title: 'Baja Salad',
      html: '',
      footer: "Tuesday, April 4<sub>th<sub>"
    })
  }

  const showAlert3 = () => {
    Swal.fire({
      title: 'Roast Beef with Gravy',
      html: '',
      footer: "Wednesday, April 5<sub>th</sub>"
    })
  }

  const showAlert4 = () => {
    Swal.fire({
      title: 'Panko Chicken',
      html: '',
      footer: "Thursday, April 6<sub>th</sub"
    })
  }

  // const showAlert5 = () => {
  //   Swal.fire({
  //     title: 'Chicken Teriyaki',
  //     html: '',
  //     footer: "Tuesday, April 7<sub>th</sub"
  //   })
  // }

  const showAlert6 = () => {
    Swal.fire({
      title: 'Grilled Lemon Chicken',
      html: '',
      footer: "Monday, April 10<sub>th</sub"
    })
  }

  const showAlert7 = () => {
    Swal.fire({
      title: 'Grilled Salmon',
      html: '',
      footer: "Tuesday, April 11<sub>th</sub>"
    })
  }

  const showAlert8 = () => {
    Swal.fire({
      title: 'Chicken Parmesan',
      html: '',
      footer: "Wednesday, April 12<sub>th</sub>"
    })
  }

  const showAlert9 = () => {
    Swal.fire({
      title: 'Cape Cod Salad',
      html: '',
      footer: "Thursday, April 13<sub>th</sub>"
    })
  }

  const showAlert10 = () => {
    Swal.fire({
      title: 'Jerk Chicken',
      html: 'with rice, beans, & plantains',
      footer: "Friday, April 14<sub>th</sub>"
    })
  }

  const showAlert11 = () => {
    Swal.fire({
      title: 'Sandwich Day',
      html: '',
      footer: "Monday, April 17<sub>th</sub>"
    })
  }

  const showAlert12 = () => {
    Swal.fire({
      title: 'Meatball Stuffed Shells',
      html: '',
      footer: "Tuesday, April 18<sub>th</sub>"
    })
  }

  const showAlert13 = () => {
    Swal.fire({
      title: 'Meat Lasagna',
      html: '',
      footer: "Wednesday, April 19<sub>th</sub>"
    })
  }

  const showAlert14 = () => {
    Swal.fire({
      title: 'Chili Bar',
      html: '',
      footer: "Thursday, April 20<sub>th</sub>"
    })
  }

  const showAlert15 = () => {
    Swal.fire({
      title: 'Fish & Chips',
      html: '',
      footer: "Friday, April 21<sub>st</sub>"
    })
  }

  const showAlert16 = () => {
    Swal.fire({
      title: 'Chicken Cutlet',
      html: '',
      footer: "Monday, April 24<sub>th</sub>"
    })
  }

  const showAlert17 = () => {
    Swal.fire({
      title: 'Corn Flake Crusted Chicken',
      html: '',
      footer: "Tuesday, April 25<sub>th</sub>"
    })
  }

  const showAlert18 = () => {
    Swal.fire({
      title: 'BBQ Ribs',
      html: '',
      footer: "Wednesday, April 26<sub>th</sub>"
    })
  }

  const showAlert19 = () => {
    Swal.fire({
      title: 'Meatball Parm',
      html: '',
      footer: "Thursday, April 27<sub>th</sub>"
    })
  }

  const showAlert20 = () => {
    Swal.fire({
      title: 'Chicken Souvlaki',
      html: '',
      footer: "Friday, April 28<sub>th</sub>"
    })
  }

  // const showAlert21 = () => {
  //   Swal.fire({
  //     title: 'Panini Day',
  //     html: '',
  //     footer: "Wednesday, March 29<sub>th</sub>"
  //   })
  // }

  // const showAlert22 = () => {
  //   Swal.fire({
  //     title: 'Chicken Tortilla Soup',
  //     html: '',
  //     footer: "Thursday, March 30<sub>th</sub>"
  //   })
  // }

  // const showAlert23 = () => {
  //   Swal.fire({
  //     title: 'The Halal Guys',
  //     html: '',
  //     footer: "Wednesday, March 31<sub>st</sub>"
  //   })
  // }

  const date = (new Date().getDate());
  // const date = 3;

    return (
      <>
        {/* <Header /> */}
        <div id="wrapOverall">
          <div id="calendar">
            <table>
              <div id="month">
                <th className="month" colspan="7">APRIL</th>
              </div>

              <div id="weeks">
                <tr className="weeks">
                  <td>SUN</td>
                  <td>MON</td>
                  <td>TUE</td>
                  <td>WED</td>
                  <td>THU</td>
                  <td>FRI</td>
                  <td>SAT</td>
                </tr>
              </div>

              <div id="days">
                <tr className="week1 week">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="days grey-day" id="day4">1</td>
                </tr>

                {/* `string string ${expression} string string` */}

                <tr className="week2 week">
                  <td className="days grey-day" id="day5">2</td>
                  <td onClick={showAlert1} className={`days hover-day ${date === 3 ? 'red' : 'black'}`} id='day3'>3</td>
                  <td onClick={showAlert2} className="{`days hover-day ${date === 4 ? 'red' : 'black'}`}" id="day8">4</td>
                  <td onClick={showAlert3} className="{`days hover-day ${date === 5 ? 'red' : 'black'}`}" id="day8">5</td>
                  <td onClick={showAlert4} className="{`days hover-day ${date === 6 ? 'red' : 'black'}`}" id="day6">6</td>
                  <td className="days grey-day" id="day5">7</td>
                  {/* <td onClick={showAlert5} className="{`days hover-day ${date === 7 ? 'red' : 'black'}`}" id="day7">7</td> */}
                  <td className="days grey-day" id="day11">8</td>
                </tr>

                <tr className="week3 week">
                  <td className="days grey-day" id="day12">9</td>
                  <td onClick={showAlert6} className="{`days hover-day ${date === 10 ? 'red' : 'black'}`}" id="day9">10</td>
                  <td onClick={showAlert7} className="{`days hover-day ${date ===11 ? 'red' : 'black'}`}" id="day10">11</td>
                  <td onClick={showAlert8} className="{`days hover-day ${date === 12 ? 'red' : 'black'}`}" id="day15">12</td>
                  <td onClick={showAlert9} className="{`days hover-day ${date === 13 ? 'red' : 'black'}`}" id="day13">13</td>
                  <td onClick={showAlert10} className="{`days hover-day ${date === 14 ? 'red' : 'black'}`}" id="day14">14</td>
                  <td className="days grey-day">15</td>
                </tr>

                <tr className="week4 week">
                  <td className="days grey-day">16</td>
                  <td onClick={showAlert11} className="{`days hover-day ${date === 17 ? 'red' : 'black'}`}" id="day17">17</td>
                  <td onClick={showAlert12} className="{`days hover-day ${date === 18 ? 'red' : 'black'}`}" id="day18">18</td>
                  <td onClick={showAlert13} className="{`days hover-day ${date === 19 ? 'red' : 'black'}`}" id="day17">19</td>
                  <td onClick={showAlert14} className="{`days hover-day ${date === 20 ? 'red' : 'black'}`}" id="day17">20</td>
                  <td onClick={showAlert15} className="{`days hover-day ${date === 21 ? 'red' : 'black'}`}" id="day17">21</td>
                  <td className="days grey-day">22</td>
                </tr>

                <tr className="week5 week">
                <td className="days grey-day">23</td>
                  <td onClick={showAlert16} className="{`days hover-day ${date === 24 ? 'red' : 'black'}`}">24</td>
                  <td onClick={showAlert17} className="{`days hover-day ${date === 25 ? 'red' : 'black'}`}">25</td>
                  <td onClick={showAlert18} className="{`days hover-day ${date === 26 ? 'red' : 'black'}`}">26</td>
                  <td onClick={showAlert19} className="{`days hover-day ${date === 27 ? 'red' : 'black'}`}">27</td>
                  <td onClick={showAlert20} className="{`days hover-day ${date === 28 ? 'red' : 'black'}`}">28</td>
                  <td className="days grey-day">29</td>
                </tr>
               
                <tr className="week5 week">
                <td className="days grey-day">30</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </div>
            </table>
          </div>
        </div>
        {/* <div className="container d-flex justify-content-center" style={{marginTop: 90}}>
             <button onClick={this.showAlert} className="btn btn-primary btn-lg">Show Alert</button>
            </div> */}
            <Footer2 />
      </>
    )
  }

export default Calendar;
