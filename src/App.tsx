function App() {
	return (
		<main>
			<section>
				<h1 className="text-center p-2 mt-3">What's the agenda?</h1>
				<form className="input-box m-3 mx-auto">
					<input type="text" className="input-field" />
					<button className="input-btn">Add task</button>
				</form>
				<section className="task-list m-3">
					<div className="task">
						<span className="task-txt">TEXT</span>
						<span className="bi bi-x-circle me-2"></span>
						<span className="bi bi-pencil-square"></span>
					</div>
				</section>
			</section>
		</main>
	);
}

export default App;
