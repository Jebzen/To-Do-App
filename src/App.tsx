import Row from "./Components/Row";

function App() {
	return (
		<main className="container">
			<h1 className="p-5 text-uppercase">To do app</h1>
			<section className="task-box">
				<Row
					task={"Task 1"}
					stage={0}
					progress={0}
					startDate={new Date("9 nov 2022")}
					deadline={new Date("9 april 2023")}
				/>
			</section>
		</main>
	);
}

export default App;
