import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Về chúng tôi</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Tải xuống</Footer.Link>
          <Footer.Link href="#">Điều khoản</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Chính sách giá</Footer.Link>
          <Footer.Link href="#">Sitemap</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Tuyển dụng</Footer.Link>
          <Footer.Link href="#">Quyền riêng tư</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <img
            style={{
              width: "25px",
              height: "25px",
              marginBottom: "10px",
              marginTop: "-20px",
            }}
            src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
            alt="fb"
          />
          <img
            style={{ width: "25px", height: "25px" }}
            src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
            alt="ins"
          />
        </Footer.Column>
      </Footer.Row>
      <hr style={{ color: "black", width: "1000px" }} />
      <Footer.Copyright>© Bản quyền thuộc về Mikan 2022</Footer.Copyright>
    </Footer>
  );
}
