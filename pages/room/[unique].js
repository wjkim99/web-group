import {Card, Col, Row} from "react-bootstrap";
import {useEffect} from "react";

export default function Room({unique}) {

	useEffect(() => {
		console.log(unique);
	}, []);

	return (<>
		<Row className="mb-3 g-3">
			<Col>
				<Card>
					<Card.Header className="bg-light">
						<Row className="align-items-end g-2">
							<Col>
								<div className="d-flex">
									<h5 className="mb-0">참가자</h5>
								</div>
							</Col>
						</Row>
					</Card.Header>
					<Card.Body className="bg-light">

					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Header className="bg-light">
						<Row className="align-items-end g-2">
							<Col>
								<div className="d-flex">
									<h5 className="mb-0">초대 가능한 인원</h5>
								</div>
							</Col>
						</Row>
					</Card.Header>
					<Card.Body className="bg-light">
						
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>);

}

export async function getServerSideProps({query: {unique}}) {

	return {
		props: {
			unique
		}
	}

}