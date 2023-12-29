import {useEffect, useState} from 'react';
import './App.css';
import { useDispatch} from 'react-redux';
import { addEmoji } from './store/EmojiSlice';
import { addCategory } from './store/CategorySlice';
import Details from './components/Details';

function App() {
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
   });

  function handleClick(category) {
    dispatch(addCategory(category));
    setCategory(category);
  }

  return (
    <div className="App">
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => handleClick(category)}>{category}</li>
        ))}
      </ul>

      {Category && <Details/>}
    </div>
  );
}
export default App;


