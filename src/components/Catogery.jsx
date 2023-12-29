import { useDispatch } from 'react-redux';
import { addEmoji } from '../store/EmojiSlice';
import { addCategory } from '../store/CategorySlice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Catogery() {
    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [Category, setCategory] = useState(null);
  
    useEffect(() => {
      async function getdata() {
        const response = await fetch('https://emojihub.yurace.pro/api/all');
        const data = await response.json();
        dispatch(addEmoji(data));
        data.map((emoji) => {
          if (!categories?.includes(emoji.category)) {
            setCategories([...categories, emoji.category]);
          }
        });
      }
      getdata();
    }, []);
  
    function handleClick(category) {
      dispatch(addCategory(category));
      setCategory(category);
    }
  return (
    <div>
        <h1>Categories</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleClick(category)}>
              <Link to="/category">{category}</Link>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Catogery