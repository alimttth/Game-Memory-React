import { useState } from "react";
import image1Url from "../src/assets/image-1.png";
import image2Url from "../src/assets/image-2.png";
import image3Url from "../src/assets/image-3.png";
import image4Url from "../src/assets/image-4.png";
import image5Url from "../src/assets/image-5.png";
import image6Url from "../src/assets/image-6.png";
import image7Url from "../src/assets/image-7.png";
import image8Url from "../src/assets/image-8.png";


const images = [
  image1Url,
  image2Url,
  image3Url,
  image4Url,
  image5Url,
  image6Url,
  image7Url,
  image8Url,
];

import "./App.css";
import Item from "./components/Item";

function App() {
  const [selectedItemIds, setSelectedItemIds] = useState([]);
  const [numberClick, setNumberClick] = useState(0);
  const [numberClick2, setNumberClick2] = useState(40);
  const generateRandom = () =>
      Array.from({ length: 16 }).map((_, i) => {
        return {
          id: i + 1,
          identifier: Math.floor(i / 2),
          image: images[Math.floor(i / 2)],
        };
      })
          .sort(() => Math.random() - 0.5)
  const [items, setItems] = useState(generateRandom);

  const handleClick = (item) => {
    if (numberClick < 2 && numberClick2 > 0) {
      setNumberClick2(numberClick2 - 1);
      setNumberClick(numberClick + 1);
      setSelectedItemIds([...selectedItemIds, item.id]);
      if (selectedItemIds.length % 2 !== 0) {
        const lastItemId = selectedItemIds[selectedItemIds.length - 1];
        const lastItem = items.find((item) => item.id === lastItemId);

        if (item.identifier !== lastItem.identifier) {
          setTimeout(() => {
            setSelectedItemIds(selectedItemIds.filter((i) => i != lastItemId));
            setNumberClick(0);
          }, 1000);

          console.log(numberClick);
        } else {
          setNumberClick(0);
        }
      }
    }
  };

  const resetGame= () => {
    const newItems = generateRandom()
    setSelectedItemIds(newItems.map((i)=>i.id));
    setItems(newItems)
    setTimeout(() => {
      setSelectedItemIds([])
      setNumberClick2(40)
    }, 1000);}

    if(numberClick2 === 0) {
      return resetGame
    }


  return (
      <div className='game-box'>
        <div className='time-move'>
          <div>
            زمان : 2:00
          </div>
          <div>
            تعداد حرکت :  {numberClick2}
          </div>
        </div>
        <div className="memory-game">
          {items.map((item, i) => (
              <Item
                  key={item.id}
                  index={i + 1}
                  image={item.image}
                  onClick={() => handleClick(item)}
                  isShow={selectedItemIds.includes(item.id)}
              />
          ))}
        </div>
        <button className="btn-reset" onClick={resetGame}>
          شروع دوباره
        </button>
      </div>
  );
}

export default App;
