import { useState } from "react";

const useForm = (initialState, onSubmit) => {
  const [state, setState] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };
  return { handleChange, handleSubmit, state, setState };
};

export default useForm;
