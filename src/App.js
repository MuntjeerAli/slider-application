import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';


const App = () => {
  const [dreams, setDreams] = useState(dreams);
  const [id, setId] = useState(0);

  return (
    <section className='section'>
      <div className='heading'>
        <h2>
          My Dreams
        </h2>
      </div>
      <div className='center'>
        {dreams.map((dream) => {
          const {id, image, name, info} = dream;

          return(
            <article key={id}>
              <img src='{image}' alt='{name}' className='dream-img' />
              <h4>{name}</h4>
              <p className='text'>{info}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })}

        <button className='prev'>
          <FiChevronRight/>
        </button>
        <button className='next'>
          <FiChevronLeft/>
        </button>
      </div>
    </section>
  )
}

export default App