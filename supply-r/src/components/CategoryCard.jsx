import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useRef } from "react";

export default function CategoryCard({ getPagination, currentPage }) {
  // const [ID, setID] = useState(null)
  let ref = useRef(0);
  // const handleValue = (e) => {
  //   console.log(e.target.value)

  //   getPagination(null,null,e.target.value);
  // }
  return (
    <>
      <Row>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = null;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://www.nicepng.com/png/full/89-898495_house-logo-png-home-address-logo-png.png"
              style={{ width: "5rem" }}
              alt="home"
            />
            <p>All Product</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 1;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fdc2fb03086b65bb5560abfd23e2d62.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="elektronik"
            />
            <p>Elektronik</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 2;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F02e2e7f45059cc2e3a20f25a274033.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="pertukangan"
            />
            <p>Pertukangan</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 3;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F6a87e7f930a01909aec63b94b70123.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="konstruksi"
            />
            <p>Jasa Konstruksi / Renovasi</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 4;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F4bb98051a2622306f5909624ce1193.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="office"
            />
            <p>Office / Stationary</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 5;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Feeed10c248e740f515af9e88024325.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="perawatan"
            />
            <p>Jasa Perawatan / Peralatan dan Mesin</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 6;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F1c77501b94f3a231bd09f092556fb5.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="souvenir"
            />
            <p>Souvenir / Merchandise</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 7;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fe230ad6855ac339b0856806971ca6a.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="event"
            />
            <p>Jasa Event Organizer</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 8;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fcb6c1517d39f626b68b3c0bacff9fd.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="mandor"
            />
            <p>Jasa Mandor dan Tenaga Kerja Lainnya</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 9;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2F373c668f1f45a0bcaf4ca7b38eab75.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="percetakan"
            />
            <p>Jasa Percetakan dan Media</p>
          </div>
        </Col>
        <Col>
          <div
            style={{ alignItems: "center" }}
            onClick={() => {
              ref.current = 10;
              getPagination(ref.current, currentPage);
            }}
          >
            <img
              src="https://padiumkm.id/_next/image?url=https%3A%2F%2Fsmb-padiumkm-images-public-prod.oss-ap-southeast-5.aliyuncs.com%2Fcategory%2Fdd2c9b5435b4ac91e9173b99361cd8.png&w=1920&q=80"
              style={{ width: "5rem" }}
              alt="kesehatan"
            />
            <p>Kesehatan</p>
          </div>
        </Col>
      </Row>
    </>
  );
}
