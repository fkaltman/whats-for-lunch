import React, { Component } from "react";
import Swal from "sweetalert2";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
import { useState } from "react"


// class Calendar extends Component {
function Calendar(){

  const showAlert1 = () => {
    Swal.fire({
      title: 'El Gordo',
      html: 'Peruvian rice, chiken, and plantains<br> (<span className="green"> &hearts; </span> green sauce <span className="green"> &hearts; </span>)',
      footer: "Tuesday, March #"
    })
  }

  const showAlert2 = () => {
    Swal.fire({
      title: 'Some other food',
      html: 'stuff',
      footer: "Wednesday, March #"
    })
  }

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
                  <td onClick={showAlert1} className="days" id="day1">1</td>
                  <td onClick={showAlert2} className="days" id="day2">2</td>
                  <td className="days" id="day3">3</td>
                  <td className="days" id="day4">4</td>
                </tr>

                <tr className="week2 week">
                  <td className="days" id="day5">5</td>
                  <td className="days" id="day6">6</td>
                  <td className="days" id="day7">7</td>
                  <td className="days" id="day8">8</td>
                  <td className="days" id="day9">9</td>
                  <td className="days" id="day10">10</td>
                  <td className="days" id="day11">11</td>
                </tr>

                <tr className="week3 week">
                  <td className="days" id="day12">12</td>
                  <td className="days" id="day13">13</td>
                  <td className="days" id="day14">14</td>
                  <td className="days" id="day15">15</td>
                  <td className="days" id="day16">16</td>
                  <td className="days" id="day17">17</td>
                  <td className="days" id="day18">18</td>
                </tr>

                <tr className="week4 week">
                  <td className="days">19</td>
                  <td className="days">20</td>
                  <td className="days">21</td>
                  <td className="days">22</td>
                  <td className="days">23</td>
                  <td className="days">24</td>
                  <td className="days">25</td>
                </tr>

                <tr className="week5 week">
                  <td className="days">26</td>
                  <td className="days">27</td>
                  <td className="days">28</td>
                  <td className="days">29</td>
                  <td className="days">30</td>
                  <td className="days">31</td>
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
