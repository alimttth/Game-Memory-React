const Item = ({ index, image, isShow, onClick,reset, time }) => {
  return (
    <div className={`memory-game__item ${isShow ? 'flipped' : ''} ${time <= 10 ? "larze" : ""}`} onClick={onClick}>
      {isShow ? <img src={image} /> : index}
    </div>


  );
};

export default Item;

//merge master - main
//s
<<<<<<< HEAD

// تغیرات مستر 
=======
//pull
>>>>>>> main
