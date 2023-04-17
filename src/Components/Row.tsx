interface IRow {
	task: string;
	stage: number;
	progress: number;
	startDate?: Date;
	deadline?: Date;
}

function Row(props: IRow) {
	const f = new Intl.DateTimeFormat("en-us", {
		dateStyle: "short",
	});

	console.log(f.format(props.startDate));

	function stage(stage: number) {
		switch (stage) {
			case -1:
				return (
					<span className="badge rounded-pill text-bg-secondary">Hold</span>
				);
			case 0:
				return (
					<span className="badge rounded-pill text-bg-primary">To do</span>
				);
			case 1:
				return (
					<span className="badge rounded-pill text-bg-warning">Doing</span>
				);
			case 2:
				return <span className="badge rounded-pill text-bg-success">Done</span>;
		}
	}

	return (
		<>
			<div>{props.task}</div>
			<div>{stage(props.stage)}</div>
			<div>{f.format(props.startDate)}</div>
			<div>{f.format(props.deadline)}</div>
			<div>{props.progress}</div>
		</>
	);
}

export default Row;
