import React from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
// import { useState } from "react"


// class Calendar extends Component {
function Calendar(){

  const showAlert1 = () => {
    Swal.fire({
      title: 'Chicken Cutlet',
      html: 'with corn, mashed potatoes, and gravy',
      footer: "Wednesday, March 1<sub>st</sub>"
    })
  }

  const showAlert2 = () => {
    Swal.fire({
      title: 'Wing Stop',
      html: '',
      footer: "Thursday, March 2<sub>nd<sub>"
    })
  }

  const showAlert3 = () => {
    Swal.fire({
      title: 'Chicken Tortilla Soup',
      html: '',
      footer: "Friday, March 3<sub>rd</sub>"
    })
  }

  const showAlert4 = () => {
    Swal.fire({
      title: 'Chicken Cordon Bleu',
      html: '',
      footer: "Monday, March 6<sub>th</sub"
    })
  }

  const showAlert5 = () => {
    Swal.fire({
      title: 'Chicken Teriyaki',
      html: '',
      footer: "Tuesday, March 7<sub>th</sub"
    })
  }

  const showAlert6 = () => {
    Swal.fire({
      title: 'Sandwich day',
      html: '',
      footer: "Wednesday, March 8<sub>th</sub"
    })
  }

  const showAlert7 = () => {
    Swal.fire({
      title: 'BBQ Shredded Chicken Sandwich',
      html: '',
      footer: "Thurday, March 9<sub>th</sub>"
    })
  }

  const showAlert8 = () => {
    Swal.fire({
      title: 'Bombay Hut',
      html: '',
      footer: "Friday, March 10<sub>th</sub>"
    })
  }

  const showAlert9 = () => {
    Swal.fire({
      title: 'Chicken Parmesan',
      html: '',
      footer: "Monday, March 13<sub>th</sub>"
    })
  }

  const showAlert10 = () => {
    Swal.fire({
      title: 'Lemon Pepper Shrimp',
      html: '',
      footer: "Tuesday, March 14<sub>th</sub>"
    })
  }

  const showAlert11 = () => {
    Swal.fire({
      title: 'Chicken Marsala',
      html: '',
      footer: "Wednesday, March 15<sub>th</sub>"
    })
  }

  const showAlert12 = () => {
    Swal.fire({
      title: 'Sloppy Joes',
      html: '',
      footer: "Thursday, March 16<sub>th</sub>"
    })
  }

  const showAlert13 = () => {
    Swal.fire({
      title: 'Chick-fil-a',
      html: '',
      footer: "Friday, March 17<sub>th</sub>"
    })
  }

  const showAlert14 = () => {
    Swal.fire({
      title: 'Blackened Chicken',
      html: 'with veggies and rice',
      footer: "Monday, March 20<sub>th</sub>"
    })
  }

  const showAlert15 = () => {
    Swal.fire({
      title: 'Swedish Meatballs',
      html: '',
      footer: "Tuesday, March 21<sub>st</sub>"
    })
  }

  const showAlert16 = () => {
    Swal.fire({
      title: 'Chicken Quesidillas',
      html: '',
      footer: "Wednesday, March 22<sub>nd</sub>"
    })
  }

  const showAlert17 = () => {
    Swal.fire({
      title: 'Homemade Cheese Ravioli',
      html: '',
      footer: "Thursday, March 23<sub>rd</sub>"
    })
  }

  const showAlert18 = () => {
    Swal.fire({
      title: 'Pizza',
      html: '',
      footer: "Friday, March 24<sub>th</sub>"
    })
  }

  const showAlert19 = () => {
    Swal.fire({
      title: 'Sandwich Day',
      html: '',
      footer: "Monday, March 27<sub>th</sub>"
    })
  }

  const showAlert20 = () => {
    Swal.fire({
      title: 'Shrimp Scampi',
      html: '',
      footer: "Wednesday, March 28<sub>th</sub>"
    })
  }

  const showAlert21 = () => {
    Swal.fire({
      title: 'Panini Day',
      html: '',
      footer: "Wednesday, March 29<sub>th</sub>"
    })
  }

  const showAlert22 = () => {
    Swal.fire({
      title: 'Chicken Tortilla Soup',
      html: '',
      footer: "Thursday, March 30<sub>th</sub>"
    })
  }

  const showAlert23 = () => {
    Swal.fire({
      title: 'The Halal Guys',
      html: '',
      footer: "Wednesday, March 31<sub>st</sub>"
    })
  }

  // const showAlert24 = () => {
  //   Swal.fire({
  //     title: 'Some other food',
  //     html: 'stuff',
  //     footer: "Wednesday, March #"
  //   })



    return (
      <>
        <Header />
        <div id="wrapOverall">
          <div id="calendar">
            <table>
              <div id="month">
                <th className="month" colspan="7">MARCH</th>
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
                  <td onClick={showAlert1} className="days hover-day" id="day1">1</td>
                  <td onClick={showAlert2} className="days hover-day" id="day2">2</td>
                  <td onClick={showAlert3} className="days hover-day" id="day3">3</td>
                  <td className="days grey-day" id="day4">4</td>
                </tr>

                <tr className="week2 week">
                  <td className="days grey-day" id="day5">5</td>
                  <td onClick={showAlert4} className="days hover-day" id="day6">6</td>
                  <td onClick={showAlert5} className="days hover-day" id="day7">7</td>
                  <td onClick={showAlert6} className="days hover-day" id="day8">8</td>
                  <td onClick={showAlert7} className="days hover-day" id="day9">9</td>
                  <td onClick={showAlert8} className="days hover-day" id="day10">10</td>
                  <td className="days grey-day" id="day11">11</td>
                </tr>

                <tr className="week3 week">
                  <td className="days grey-day" id="day12">12</td>
                  <td onClick={showAlert9} className="days hover-day" id="day13">13</td>
                  <td onClick={showAlert10} className="days hover-day" id="day14">14</td>
                  <td onClick={showAlert11} className="days hover-day" id="day15">15</td>
                  <td onClick={showAlert12} className="days hover-day" id="day16">16</td>
                  <td onClick={showAlert13} className="days hover-day" id="day17">17</td>
                  <td className="days grey-day" id="day18">18</td>
                </tr>

                <tr className="week4 week">
                  <td className="days grey-day">19</td>
                  <td onClick={showAlert14} className="days hover-day">20</td>
                  <td onClick={showAlert15} className="days hover-day">21</td>
                  <td onClick={showAlert16} className="days hover-day">22</td>
                  <td onClick={showAlert17} className="days hover-day">23</td>
                  <td onClick={showAlert18} className="days hover-day">24</td>
                  <td className="days grey-day">25</td>
                </tr>

                <tr className="week5 week">
                  <td className="days grey-day">26</td>
                  <td onClick={showAlert19} className="days hover-day">27</td>
                  <td onClick={showAlert20} className="days hover-day">28</td>
                  <td onClick={showAlert21} className="days hover-day">29</td>
                  <td onClick={showAlert22} className="days hover-day">30</td>
                  <td onClick={showAlert23} className="days hover-day">31</td>
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
