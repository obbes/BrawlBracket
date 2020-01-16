/**
 * Date: 1/16/2020
 * Purpose: Single elim bracket for "The Brawl" hosted by Lawler (Adam Thorton)
 * Author: Robert Richter
 * Notes: Frame work from 'https://codesandbox.io/s/zw6zn9x4kx' by lak801
 * Edits: Heading and Body styles, Set fixed button height, Condensed duplicate code, Added logos,
 *         Bracket now is entered top-down => left to right.         
 */

// eslint-disable-next-line
import styled, { css } from "styled-components";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
//this is the styled component for the competitor which is just a button

//This ideally will be changed into a direct input
let Competitor = styled.button`
  color: #010101;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  height: 50px;
  grid-column-start: ${props => props.indexOfColumn};
  grid-row-start: ${props => props.indexOfRow};
  background-color: ${props => props.isClicked};
  margin: 25px;
  border: 2px solid #151221;
`;

//grid props for the grid created in main
const Main = styled.div`
  grid-template-columns: ${props => props.mainIndexOfColumn};
  grid-template-rows: ${props => props.mainIndexOfRow};
  background-color: white;
  display: grid;
  height: 100vh;
  text-align: center;
`;

//props are passed into the input and input button for things such as a change or button click
function Input(props) {
  return (
    <div className="intro-components">
      <div className="size-label">
        <h5>Number of Teams</h5>
      </div>
      <div className="size-label">
        <select onChange={props.onChange}>
          <option value="undefined">Clear bracket</option> />
          <option value="4">4 Teams</option>
          <option value="8">8 Teams</option>
          <option value="16">16 Teams</option>
        </select>
      </div>
      {
      //This lower div and input is probably going to be deleted
      }
      <div>
        <input
          type="text"
          id="number"
          value={props.newName}
          placeholder="Enter Team Name"
          onChange={props.onChangeOfInput}
          onKeyPress={props.onEnter}
        />
        <button onClick={props.onClick}>Submit Team</button>
      </div>
    </div>
  );
}

class App extends React.Component {
  //input is rendered in App
  renderInput() {
    return (
      <Input
        onChangeOfInput={e => this.handleChangeOfInput(e)}
        onChange={e => this.handleChange(e)}
        onClick={e => this.handleClickOfInput(e)}
        onEnter={e => this.handleEnter(e)}
        newName={this.state.newName}
      />
    );
  }

  //this does the work of rendering the buttons in Main

  //it allows the competitor to have indexes for css, onClick function, and a key
  listBrackets() {
    let bracketType = this.state.bracket4;
    if (this.state.numOfSeeds === "4") {
      bracketType = this.state.bracket4;
    }
    if (this.state.numOfSeeds === "8") {
      bracketType = this.state.bracket8;
    }
    if (this.state.numOfSeeds === "16") {
      bracketType = this.state.bracket16;
    }
    const bracketList = this.state.names.map((text, key) => {
      return (
        <Competitor
          indexOfColumn={bracketType.column[key]}
          indexOfRow={bracketType.row[key]}
          key={key}
          isClicked={this.state.isClicked[key]}
          onClick={e => this.handleClickOfSeed(e, key, text)}
        >
          {text}
        </Competitor>
      );
    });
    return (
      <Main
        mainIndexOfColumn={bracketType.mainColumn}
        mainIndexOfRow={bracketType.mainRow}
        className = "bracketarea"
      >
        {bracketList}{}
      </Main>
    );
  }

  //this has the grid properties for each bracket

  //match is used to decide where the button's text should move to next
  constructor(props) {
    super(props);
    this.state = {
      numOfSeeds: 0,
      seedNum: [],
      newName: "",
      names: [],
      isClicked: [],
      class: "container",
      bracket4: {
        mainColumn: "30% 20% 20% 30%",
        column: [1, 1, 4, 4, 2, 3],
        row: [2, 4, 2, 4, 3, 3],
        match: [4, 4, 5, 5],
        mainRow: "20% 20% 20% 20% 20%"
      },
      bracket8: {
        mainColumn: "20% 15% 15% 15% 15% 20%",
        column: [1, 1, 1, 1, 6, 6, 6, 6, 2, 2, 5, 5, 3, 4],
        row: [1, 2, 4, 5, 1, 2, 4, 5, 2, 4, 2, 4, 3, 3],
        match: [8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 13, 12],
        mainRow: "20% 20% 20% 20% 20%"
      },
      bracket16: {
        mainColumn: "12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%",
        column:[1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8,2,2,2,2,7,7,7,7,3,3,6,6,4,5],
        row: [1,2,4,5,7,8,10,11,1,2,4,5,7,8,10,11,2,4,8,10,2,4,8,10,3,9,3,9,6,6],
        match: [16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,28,29],
        mainRow: "9% 9% 9% 9% 9% 9% 9% 9% 9% 9% 9%"
      }
    };
  }

  //functionality to enter key
enter_or_input(){
    const newNames = this.state.names;
    const arrLength = this.state.names.length;
    let index = 0;
    if (arrLength === 6) {
      //checks length of array
      while (
        //as long as they are the outside seeds then randomly put the name in it
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = index + 1;
      }
    } else if (arrLength === 14) {
      while (
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        index === arrLength - 3 ||
        index === arrLength - 4 ||
        index === arrLength - 5 ||
        index === arrLength - 6 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = index + 1;
      }
    } else if (arrLength === 30) {
      while (
        newNames[index] !== undefined ||
        index === arrLength - 1 ||
        index === arrLength - 2 ||
        index === arrLength - 3 ||
        index === arrLength - 4 ||
        index === arrLength - 5 ||
        index === arrLength - 6 ||
        index === arrLength - 7 ||
        index === arrLength - 8 ||
        index === arrLength - 9 ||
        index === arrLength - 10 ||
        index === arrLength - 11 ||
        index === arrLength - 12 ||
        index === arrLength - 13 ||
        index === arrLength - 14 ||
        !newNames.indexOf(this.state.newName) < 0 ||
        index < 0
      ) {
        index = index + 1;
      }
    } else {
      index = undefined;

    }
    if (index !== undefined) {
      newNames.splice(index, 1, this.state.newName); //update state of names array
      this.setState({
        names: newNames
      });
    }
    this.setState({
      newName: ""
    });
}
  //The following two handles run the enter_or_input method
  handleEnter(e) {
    if (e.key === "Enter") {
        this.enter_or_input()
    }
  }
  handleClickOfInput(e) {
    this.enter_or_input()
  }

  //when the input is being changed, update the string of new name
  handleChangeOfInput(e) {
    const name = e.target.value;
    this.setState({
      newName: name
    });
  }
  //updates the number of seeds chosen
  handleChange(e) {
    let newNum = e.target.value;
    this.setState({
      numOfSeeds: newNum
    });

    if (newNum === "undefined") {
      this.setState({
        names: [],
        class: "",
        isClicked: []
      });
    }

    if (newNum === "4") {
      //depending on the seed, fills the arrays with the correct amount of buttons.
      this.setState({
        names: Array(6).fill(),
        class: "bracket4",
        isClicked: Array(6).fill("#c1c1c1")
      });
    }
    if (newNum === "8") {
      this.setState({
        names: Array(14).fill(),
        class: "bracket8",
        isClicked: Array(14).fill("#c1c1c1")
      });
    }
    if (newNum === "16") {
      this.setState({
        names: Array(30).fill(),
        class: "bracket16",
        isClicked: Array(30).fill("#c1c1c1")
      });
    }
  }

  handleClickOfSeed(e, key, text) {
    let arr = this.state.names;
    let newArr = this.state.names;
    let numBracket = this.state.numOfSeeds;
    let clickedArr = this.state.isClicked;
    if (text !== undefined) {
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key]; //this algorithm decides where the name should go once clicked.
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red"; //uses key plus or minus one and also depends on the bracket size
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "4"
      ) {
        newArr[this.state.bracket4.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "8"
      ) {
        newArr[this.state.bracket8.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
      if (
        newArr[key + 1] !== undefined &&
        key % 2 === 0 &&
        clickedArr[key + 1] !== "green" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key + 1] = "red";
      } else if (
        newArr[key - 1] !== undefined &&
        key % 2 !== 0 &&
        clickedArr[key - 1] !== "green" &&
        numBracket === "16"
      ) {
        newArr[this.state.bracket16.match[key]] = arr[key];
        clickedArr[key] = "green";
        clickedArr[key - 1] = "red";
      }
    }
    this.setState({
      names: newArr
    });
  }
  render() {
    return (
      <div className="bracketMaker">
        <div className="heading">{this.renderInput()}</div>
        <div className="body" >{this.listBrackets()}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
