import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Select from 'react-select'

function Form() {
  const [comment, setComment] = useState("");
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const [id, setId] = useState("");
  const nodeURL = "https://text-to-speech3.herokuapp.com/";
  const dispatch = useDispatch();

  const loadAll = useCallback(async () => {
    const getAll = await fetch(`${nodeURL}comments`).then((r) => r.json());
    const comments = getAll.map((item) => item.comment);
    setId(getAll.length + 1);
    setTimeout(
      () => dispatch({ type: "sendComments", comments: comments }),
      3000
    );
  }, [dispatch]);

  const handleChange = ({ target }) => {
    setComment(target.value);
  };

  const handleClik = () => {
    if (comment) {
      setComment("");
      const commentId = id + "";
      axios.post('https://text-to-speech3.herokuapp.com/translator', {comment, source, target, commentId})
      setTimeout(() => loadAll(), 3000);
    } else {
      alert("O comentário está vazio!");
    }
  };

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  const options = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'es', label: 'Spanish' }
  ]

  
  return (
    <div className="form">
      <p>Comentário</p>
      <textarea
        className="comment-textarea"
        type="text"
        name="comment"
        value={comment}
        onChange={handleChange}
        maxLength="200"
      />
    Lingua de Entrada:  
    <Select options={options} onChange={setSource} />
    Lingua de Saída:  
    <Select options={options} onChange={setTarget} />
      <button className="button-form" onClick={handleClik}>
        Cadastrar
      </button>
    </div>
  );
}

export default Form;
