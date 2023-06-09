import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TokenAnnotator, TextAnnotator } from "react-text-annotate";
import * as FileSaver from "file-saver";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RecommenderActions from "./redux/recommender/recommender";
import { Row, Col } from "reactstrap";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { addToCart } from "./redux/cart/actions";
import { AddTest } from "./redux/Test/actions";
import "./App.css";
import Select from "react-select";
import { Table } from "reactstrap";
import Jobs_title from "./jobs_titles";
const customStyles = {
  control: (base, state) => ({
    ...base,

    height: "50px",
    borderRadius: "12px",
    marginTop: "5px",
    marginBottom: "5px",
    minWidth: "400px",
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#283B6A" : "#f2f2f2",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
    },
  }),
};
export default function RecommnderCard({ children }) {
  const redux = useSelector((state) => state);
  const dispatch = useDispatch();
  const [tags, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [tag_color, setTagcolor] = useState([]);
  const [clicked, setClick] = useState(false);
  const [job, setjob] = useState({
    value: "Choisir un métier",
    id: "Choisir un métier",
  });

  const categorie = [
    { value: "Dialyse", id: "Dialyse" },
    { value: "Pharma", id: "Pharma" },
  ];

  const addItem = () => {
    const newItem = {
      id: inputValue,
      label: inputValue,
      text: inputValue,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };

    setItems([...tags, newItem]);

    setInputValue("");
  };

  const handleKeyDown = () => {
    setClick(true);
    addItem();
    dispatch(RecommenderActions.RecommenderRequest({ job }));
  };

  const handleAddTest = (name) => {
    dispatch(
      AddTest({
        skills: name,
      })
    );
  };

  const TEXT =
    "Recently completed a diploma in Digital Marketing from ABC College. 5 years of experience as a full-stack web developer, working on a variety of projects for clients in the healthcare, finance, and education industries. Proficient in developing web applications using ReactJS, Node.js, and MongoDB";

  const [state, setState] = useState([{}]);
  const [tag, setTag] = useState("");

  const handleChange = (value) => {
    setState(value);
    console.log("tag test*****", value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const delete_ = (start) => {
    const n_state = state.filter((val) => val.start !== start);
    setState(n_state);
  };
  const AnnotatedEntity = (props) => {
    const { content, color, onClick, start, label } = props;
    return (
      <span
        onClick={() => delete_(start)}
        className={`${color} mx-2 px-2 py-1 rounded-sm active_button`}
      >
        {content} <span className=" font-bold text-base p-1"> {label}</span>
      </span>
    );
  };
  console.log("taaaaag", tag);
  const FilerColor = tags.filter((item) => {
    // Check if item matches selected color and search name
    return item.id == tag;
  });

  const onchangeSelectJobs = (item) => {
    //setData(redux.profiling.response.data.asMutable({ deep: true }))

    setjob(item);

    //setData(redux.search.response.data.asMutable({ deep: true }))
    //dispatch(SearchAction.SearchRequest({ item }));
    //setData(redux.search.response.data.asMutable({ deep: true }))
  };
  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: "100px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div className=" flex flex-col  m-10  shadow-md">
        <div
          className=" px-4 py-6 flex flex-row  space-x-2  "
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Select
            value={job}
            onChange={onchangeSelectJobs}
            options={Jobs_title}
            getOptionValue={(option) => option.value}
            getOptionLabel={(option) => option.value}
            label={"products"}
            styles={customStyles}
          />
          <Button
            style={{
              borderRadius: "22px",
              minWidth: "200px",
              maxHeight: "50px",
            }}
            variant="contained"
            onClick={() => handleKeyDown()}
          >
            Rechercher
          </Button>
        </div>
        {clicked & !redux.recommender.loaded ? (
          <Spinner color="primary" className="mb-1" />
        ) : (
          ""
        )}

        {redux.recommender.loaded ? (
          <div>
            <hr />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "100%",
                paddingTop: "5%",
                paddingLeft: "2%",
                paddingBottom: "1%",
              }}
            >
              <Col
                style={{
                  marginLeft: "4%",
                  width: "200px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Nom de la compétence
              </Col>
              <Col
                style={{
                  marginLeft: "200px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  minWidth: "600px",
                  minWidth: "600px",
                }}
              >
                Lien de la formation
              </Col>
              <Col
                style={{
                  width: "200px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginLeft: "80px",
                }}
              >
                Test de compétences
              </Col>
            </div>
            <hr />

            {redux.recommender.response.annotate_data.map((product) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  maxWidth: "100%",
                  paddingTop: "1%",
                  paddingLeft: "2%",
                  paddingBottom: "1%",
                }}
              >
                <Col style={{ marginLeft: "3.2%", width: "200px" }}>
                  <h2>{product.name}</h2>
                </Col>
                <Col
                  style={{
                    marginLeft: "200px",
                    minWidth: "600px",
                    maxWidth: "600px",
                  }}
                >
                  {" "}
                  <a href={product.link} target="_blank">
                    {" "}
                    {product.link}{" "}
                  </a>{" "}
                </Col>
                <Col style={{ marginLeft: "100px", width: "200px" }}>
                  {" "}
                  <Link to={"/test/" + product.name.toLowerCase()}>
                    <Button
                      style={{
                        borderRadius: "22px",
                       
                        maxHeight: "50px",
                        maxWidth:"120px"
                      }}
                      variant="contained"
                      onClick={() => handleAddTest(product.name.toLowerCase())}
                    >
                      Test
                    </Button>
                  </Link>
                </Col>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
