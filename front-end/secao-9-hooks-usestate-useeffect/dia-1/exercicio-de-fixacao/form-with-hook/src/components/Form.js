import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [module, setModule] = useState();

  return (
    <form>
      <label htmlFor="name">
        Nome Completo:
      <input type="text" name="name" id="name" 
      value={name} onChange={({target}) => setName(target.value)} />
      </label>

      <label htmlFor="age">
        Idade:
        <input type="number" id="age" value={age} onChange={({target}) => setAge(target.value)} />
      </label>

      <label htmlFor="location">
        Cidade:
        <input type="text" id="location" value={location} 
        onChange={({target}) => setLocation(target.value)} />
      </label>

      <label htmlFor="fundamentos">
        Fundamentos
      <input type="radio" name="curso" 
      value="fundamentos" id="fundamentos" 
      checked={module === 'Fundamentos'}
      onChange={({target}) => setModule(target.value)} />
      </label>

      <label htmlFor="front-end">
        Front-end
      <input type="radio" name="curso" 
      value="front-end" id="front-end"
      checked={module === ' Front-end'}
      onChange={({target}) => setModule(target.value)}/>
      </label>

      <label htmlFor="back-end">
        Back-end
      <input type="radio" name="curso" 
      value="back-end" id="back-end"
      checked={module === 'Back-end'}
      onChange={({target}) => setModule(target.value)}/>
      </label>

      <label htmlFor="ciencia-da-computacao">
        Ciência da Computação
      <input type="radio" name="curso" 
      value="ciencia-da-computacao" id="ciencia-da-computacao"
      checked={module === 'Ciência da Computação'}
      onChange={({target}) => setModule(target.value)}/>
      </label>
      <button
      type="submit">
        Submeter
      </button>
    </form>
  );
}

export default Form;