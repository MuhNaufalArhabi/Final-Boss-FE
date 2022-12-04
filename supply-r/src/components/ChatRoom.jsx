import React from "react";
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardHeader,
//   MDBCardBody,
//   MDBIcon,
//   MDBTextArea,
// } from "mdb-react-ui-kit";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";

export default function ChatRoom(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md="12" lg="12" xl="12">
            <Card id="chat1" style={{ borderRadius: "15px" }}>
              <Card.Header
                className="d-flex justify-content-between align-items-center p-3  text-white border-bottom-0"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  backgroundColor: "#2596be",
                }}
              >
                {/* <Icon fas icon="angle-left" /> */}
                <p className="mb-0 fw-bold">Live chat</p>
                {/* <Icon fas icon="times" /> */}
              </Card.Header>

              <Card.Body>
                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div
                    className="p-3 ms-3"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "rgba(57, 192, 237,.2)",
                    }}
                  >
                    <p className="small mb-0">
                      Hello and thank you for visiting MDBootstrap. Please click
                      the video below.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4">
                  <div
                    className="p-3 me-3 border"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "#fbfbfb",
                    }}
                  >
                    <p className="small mb-0">
                      Thank you, I really like your product.
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div className="ms-3" style={{ borderRadius: "15px" }}>
                    <div className="bg-image">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                        style={{ borderRadius: "15px" }}
                        alt="video"
                      />
                      <a href="#!">
                        <div className="mask"></div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div
                    className="p-3 ms-3"
                    style={{
                      borderRadius: "15px",
                      backgroundColor: "rgba(57, 192, 237,.2)",
                    }}
                  >
                    <p className="small mb-0">...</p>
                  </div>
                </div>

                {/* <TextArea
                className="form-outline"
                label="Type your message"
                id="textAreaExample"
                rows={4}
              /> */}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Type your message</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Button
                  style={{ paddingTop: ".55rem", backgroundColor: "#2596be" }}
                >
                  Send
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Button
        style={{
          backgroundColor: "#2596be",
          borderColor: "#2596be",
          color: "white",
        }}
        onClick={props.onHide}
      >
        Close
      </Button>
    </Modal>
  );
}
