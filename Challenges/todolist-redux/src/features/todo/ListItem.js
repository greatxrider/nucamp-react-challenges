import { useDispatch } from 'react-redux';
import { removeItem } from './todoSlice';

const ListItem = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="list-item">
            <button
                className="remove-item-button"
                onClick={() => dispatch(removeItem(item))}
            >
                X
            </button>
            <p className="item-text">{item.name}</p>
        </div>
    );
};

export default ListItem;
