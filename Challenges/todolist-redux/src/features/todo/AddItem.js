import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './todoSlice.js';

const AddItem = () => {
    const [inputValue, updateInput] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        updateInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(addItem(inputValue));
        updateInput('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">+</button>
        </form>
    );
};

export default AddItem;
