import { useState } from 'react';
import Card from './components/Card';
import my_config from './config.js';

function App() {
  function likeUser() {
    console.log(card_data.username,' has been liked.');
  }
  function dislikeUser() {
    console.log(card_data.username, ' has been disliked.');
  }
  const [card_data, setCardData] = useState(getNewUserData);
  async function getNewUserData() {
    const url = 'https://api.api-ninjas.com/v1/randomuser';
    const my_key = my_config.MY_API_KEY;
    const my_header = new Headers();
    my_header.append('X-Api-Key', my_key)
    try {
      const response = await fetch(url, {headers: my_header});
      if (response.ok) {
        const JSONresponse = await response.json();
        setCardData(JSONresponse);
      } else {
        console.log('Error: ', response);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="container">
        <div className="py-2 my-1 fs-1 text-center">WebTItle!</div>

        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn align-self-center btn-danger fs-1"
            onClick={()=>{dislikeUser(); getNewUserData()}}
          >
            &#9747;
          </button>
          <Card
            classess={'my-5'}
            title={card_data.username}
            text={card_data.address}
          ></Card>
          <button
            type="button"
            className="btn align-self-center btn-success fs-1"
            onClick={()=>{likeUser(); getNewUserData()}}
          >
            &#10003;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
