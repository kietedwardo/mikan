import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import NewFooter from "../containers/newfooter";
import { HeaderContainer } from "../containers/header";

export default function Payment() {
  const [userName, setUserName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDay, setExpireDay] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const history = useNavigate();

  const isInvalid = userName === "" || cardNumber === "";

  function navSignin() {
    history("/signup");
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Điền thông tin thanh toán của bạn</Form.Title>
          <Cards
            name={userName}
            number={cardNumber}
            expiry={expireDay}
            cvc={cvc}
            focused={focus}
          />
          <Form.Base onSubmit={navSignin}>
            <Form.Input
              type="text"
              name="name"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
            <Form.Input
              input
              type="tel"
              name="number"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxLength="19"
            />
            <Form.Input
              input
              type="tel"
              name="cvc"
              placeholder="CVC"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxLength="3"
            />
            <Form.Input
              input
              type="tel"
              name="expireDay"
              placeholder="MM/YY"
              value={expireDay}
              onChange={(e) => setExpireDay(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxLength="5"
            />
            <Form.Submit
              disabled={isInvalid}
              type="submit"
              data-testid="payment"
            >
              ĐĂNG KÝ GÓI HỘI VIÊN
            </Form.Submit>
          </Form.Base>
          <Form.Link to="/plan">Đổi gói</Form.Link>
          <Form.TextSmall>
            Mikan sẽ tự động thanh toán khi qua tháng mới một cách tự động và
            bạn có thể huỷ gói bất kì lúc nào
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <NewFooter />
    </>
  );
}
