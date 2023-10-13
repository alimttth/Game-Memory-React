const Item = ({ index, image, isShow, onClick,reset }) => {
  return (
      /*اینجا هم تغییر داریم*/
    <div className={`memory-game__item ${isShow ? 'flipped' : ''}`} onClick={onClick}>
      {isShow ? <img src={image} /> : index}
    </div>


  );
};

export default Item;

//merge master - main
//s
//pull
