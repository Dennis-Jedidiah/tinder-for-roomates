function Card({classess, title, text}) {
  
  return (
    <div className={"card shadow " + classess}  style={{width: '24rem'}}>
      <img src="https://placehold.co/400" className="card-img-top p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-wrap">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Card;
