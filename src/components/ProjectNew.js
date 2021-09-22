import React, { Component } from "react";

var projectArr = [
	require("../img/project/mazedisplay.PNG").default,
	require("../img/project/movieSix.PNG").default,
	require("../img/project/queene.PNG").default,
	require("../img/project/triangle2.png").default,
	require("../img/project/verticle.PNG").default,
	require("../img/project/Snakepic.PNG").default,
	require("../img/project/Cryptopic.PNG").default,
	require("../img/project/Emojipic.PNG").default,
	require("../img/project/Triviapic.PNG").default,
];

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			aboutFlag: false,
			contactFlag: false,
			projectFlag: false,
			homeFlag: false,
			projectHolder: 0,
			project: [
				{
					src: null,
					link: "www.bookscribs.com",
					name: "Bookscribs.com",
					github: null,
				},
				{
					src: projectArr[0],
					link: "https://optimistic-babbage-2ed085.netlify.app/",
					name: "Maze Algorithm",
					github: "https://github.com/Ben8842/moremaze",
				},
				{
					src: projectArr[1],
					link: "https://www.moviegame.fun/",
					name: "Movie Game",
					github: "https://github.com/Ben8842/movieGameFour",
				},
				{
					src: projectArr[2],
					link: "https://tender-benz-d42ce4.netlify.app/",
					name: "Queen Puzzle",
					github: "https://github.com/Ben8842/eightqueen",
				},
				{
					src: projectArr[3],
					link: "https://jolly-meninsky-2047bc.netlify.app/",
					name: "Triangle",
					github: "https://github.com/Ben8842/triangle",
				},
				{
					src: projectArr[4],
					link: "https://wordsearch-generator.herokuapp.com/",
					name: "Word Search Generator",
					github: "https://github.com/Ben8842/wordsearch",
				},
				{
					src: projectArr[5],
					link: "https://admiring-spence-0175e7.netlify.app/",
					name: "Snake Game",
					github: "https://github.com/Ben8842/snake",
				},
				{
					src: projectArr[6],
					link: "https://ben8842.github.io/BitProject/",
					name: "Cryptocurrency Project",
					github: "https://github.com/Ben8842/BitProject",
				},
				{
					src: projectArr[7],
					link: "https://vibrant-spence-207a4e.netlify.app/",
					name: "Emoji Game",
					github: "https://github.com/Ben8842/matching-game",
				},
				{
					src: projectArr[8],
					link: "https://trivia-redux.herokuapp.com/",
					name: "Trivia",
					github: "https://github.com/Ben8842/heroku-trivia",
				},
			],
		};
	}

	showProject(e) {
		this.setState({ projectHolder: e.target.value - 1 });
	}

	nextNum() {
		if (this.state.projectHolder === 8) {
			this.setState({ projectHolder: 0 });
		} else this.setState({ projectHolder: this.state.projectHolder + 1 });
	}

	prevNum() {
		if (this.state.projectHolder === 0) {
			this.setState({ projectHolder: 8 });
		} else this.setState({ projectHolder: this.state.projectHolder - 1 });
	}

	render() {
		var { projectHolder, project } = this.state;

		const listChoose = (
			<div>
				{project.map((value, index) => {
					console.log("hello", project[index].name);
					return <div>{project[index].name}</div>;
				})}
			</div>
		);

		return (
			<div>
				<div>{listChoose}</div>
			</div>
		);
	}
}
export default Project;
