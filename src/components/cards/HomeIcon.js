import React from "react";
import classnames from "classnames";
import { Row, Col } from "reactstrap";

const HomeIcon = (props) => {
  const { alt, src, className, rounded, small, title } = props;
  return (
    <Row
      style={{
        width: "100%",
        marginTop: "5%",
      }}
    >
      <Col>
        <div
          style={{
            height: "90px",
            width: "90px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              maxWidth: "40px",
              minWidth: "40px",
              maxHeight: "auto",
              width: "60%",
            }}
            alt={alt}
            src={src}
          />
        </div>
        <div
          style={{
            width: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0e204d",
            fontSize: "15px",
          }}
        >
          {title}
        </div>
      </Col>
    </Row>
  );
};

export default HomeIcon;
