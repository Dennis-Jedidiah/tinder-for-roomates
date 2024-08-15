function Card({classess}) {
  
  return (
    <div className={"card shadow " + classess}  style={{width: '24rem'}}>
      <img src="https://placehold.co/400" className="card-img-top p-2" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-wrap">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
