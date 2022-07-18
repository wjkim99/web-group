import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {useRouter} from "next/router";

export default function Index() {

	const router = useRouter();

	const [form, setForm] = useState({
		title: ''
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const handleClickSubmit = () => {

		router.push('/room/' + form.title).then();

	};

	return (<>
		<Row className="mb-3 g-3">
			<Col>
				<Card>
					<Card.Header className="bg-light">
						<Row className="align-items-end g-2">
							<Col>
								<div className="d-flex">
									<h5 className="mb-0">방 만들기</h5>
								</div>
							</Col>
						</Row>
					</Card.Header>
					<Card.Body className="bg-light">
						<Row className="align-items-end g-2">
							<Col>
								<Form>
									<Form.Group className="mb-3">
										<Form.Control
											name="title"
											type="text"
											value={form.title}
											placeholder="제목"
											autoComplete="off"
											onChange={handleChange}
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Button
											type="button"
											color="primary"
											className="mt-3 w-100"
											disabled={!form.title}
											onClick={handleClickSubmit}
										>만들기</Button>
									</Form.Group>
								</Form>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>);

}