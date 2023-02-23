import React, { Component } from "react";
import Swal from "sweetalert2";
// import { Link } from "react-router-dom";


class Calendar extends Component {

  showAlert = () => {
    Swal.fire({
      title: 'El Gordo',
      html: 'Peruvian rice, chiken, and plantains<br> (<span class="green"> &hearts; </span> green sauce <span class="green"> &hearts; </span>)',
      footer: "Tuesday, March #"
    })
  }

  render(){
    return (
      <>
         <div id="wrapOverall">
      <div id="calendar">
        <table>
          <div id="month">
            <th class="month" colspan="7">MARCH</th>
          </div>

          <div id="weeks">
            <tr class="weeks">
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
            <tr class="week1 week">
              <td></td>
              <td></td>
              <td></td>
              <td class="days" id="day1">1</td>
              <td class="days" id="day2">2</td>
              <td class="days" id="day3">3</td>
              <td class="days" id="day4">4</td>
            </tr>

            <tr class="week2 week">
              <td class="days" id="day5">5</td>
              <td class="days" id="day6">6</td>
              <td class="days" id="day7">7</td>
              <td class="days" id="day8">8</td>
              <td class="days" id="day9">9</td>
              <td class="days" id="day10">10</td>
              <td class="days" id="day11">11</td>
            </tr>

            <tr class="week3 week">
              <td class="days" id="day12">12</td>
              <td class="days" id="day13">13</td>
              <td class="days" id="day14">14</td>
              <td class="days" id="day15">15</td>
              <td class="days" id="day16">16</td>
              <td class="days" id="day17">17</td>
              <td class="days" id="day18">18</td>
            </tr>

            <tr class="week4 week">
              <td class="days">19</td>
              <td class="days">20</td>
              <td class="days">21</td>
              <td class="days">22</td>
              <td class="days">23</td>
              <td class="days">24</td>
              <td class="days">25</td>
            </tr>

            <tr class="week5 week">
              <td class="days">26</td>
              <td class="days">27</td>
              <td class="days">28</td>
              <td class="days">29</td>
              <td class="days">30</td>
              <td class="days">31</td>
              <td></td>
            </tr>
          </div>
        </table>
      </div>
    </div>
          {/* <div className="container d-flex justify-content-center" style={{marginTop: 90}}>
             <button onClick={this.showAlert} className="btn btn-primary btn-lg">Show Alert</button>
          </div> */}
      </>
      )
  }
}

export default Calendar;
