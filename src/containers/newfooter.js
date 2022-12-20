import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import MobileStoreButton from "react-mobile-store-button";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function NewFooter() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center  p-4 border-bottom">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto">
              <p className="pt-2">
                <strong>Tải ngay tại:</strong>
              </p>
            </MDBCol>

            <MDBCol size="auto">
              <MobileStoreButton store="android" />
            </MDBCol>
          </MDBRow>
        </form>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Mikan
              </h6>
              <p>
                Mikan là công ty cung cấp dịch vụ giải trí xem phim trên
                Internet với tốc độ cao và hình ảnh, âm thanh chất lượng, ra đời
                vào giữa năm 2022. Với sứ mệnh đem đến cho người dùng trải
                nghiệm xem phim, thưởng thức các video một cách tuyệt vời nhất ,
                Mikan luôn nỗ lực từng ngày để phát triển, hoàn thiện hơn về
                từng sản phẩm, dịch vụ mà công ty cung cấp.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tính năng</h6>
              <p>
                <a href="#!" className="text-reset">
                  Tuyển dụng
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Tải xuống
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  API
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Hỗ trợ</h6>
              <p>
                <a href="#!" className="text-reset">
                  Chính sách giá
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Báo lỗi
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Điều khoản
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trợ giúp
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                669 QL1A, khu phố 3, Thủ Đức, Thành phố Hồ Chí Minh
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@mikan.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 84 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="#">
          Mikan
        </a>
      </div>
    </MDBFooter>
  );
}
