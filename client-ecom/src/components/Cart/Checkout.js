import React, { useState, useContext } from "react";
import { Container, Form, Button, Row, Alert } from "react-bootstrap";
import CartContext from "../../contexts/CartContext";
import { storeOrder } from "../FirebaseDB/FirebaseQueries";
import ChSpinner from "../Common/ChSpinner";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mailCheck, setMailCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [storeResult, setStoreResult] = useState("hide");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setStoreResult("storing");
    /*let checkMail = () => {
      if (mailCheck !== mail) {
        if (!errors.includes("mailCheck")) setErrors([...errors, "mailCheck"]);
      } else {
        setErrors(errors.filter((e) => e !== "mailCheck"));
      }
      return errors.length !== 0;
    };
    let validations = checkMail();
    console.log(form.checkValidity);
    console.log(validations === false);
    console.log(form.checkValidity() === false);
    */

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("llega");

    storeOrder({
      ...cartCtx.cart,
      buyer: {
        name: name,
        mail: mail,
        phone: phone,
      },
    })
      .then((doc) => {
        showResult("success");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("llega");
    event.preventDefault();
  };

  const showResult = (type) => {
    setStoreResult(type);
    setTimeout(() => setStoreResult("hide"), 5000);
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <Form.Text className="text-muted">
            No compartiremos tu email con nadie mas.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Repite tu Mail</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Mail"
            value={mailCheck}
            pattern={mail}
            onChange={(e) => setMailCheck(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            required
            type="phone"
            placeholder="Telefono"
            value={phone}
            pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Confirmar
        </Button>
      </Form>
      <Row>
        {storeResult === "success" ? (
          <Alert key={storeResult} variant={storeResult}>
            Tu orden se ha procesado correctamente!
          </Alert>
        ) : null}

        {storeResult === "storing" ? <ChSpinner message="Confirmando" /> : null}
      </Row>
    </Container>
  );
}

export default Checkout;
