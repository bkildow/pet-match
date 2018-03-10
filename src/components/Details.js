import React, { Component } from "react";
import { Image, Grid, Row, Col } from "react-bootstrap";

class Details extends Component {
  render() {
    const { nickname, photo, description } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>{nickname}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={5}>
            {photo && <Image rounded responsive src={photo} alt={nickname} />}
          </Col>
          <Col xs={12} md={7}>
            <p>{description}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Details;
