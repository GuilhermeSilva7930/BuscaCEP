import { useRef, useState } from 'react';
import React from 'react';
import api from 'axios'

function App() {

  const cep = useRef()
  const [endereco, setEndereco] = useState([])

  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  }

  function getCep() {
    api.get(`https://viacep.com.br/ws/${cep.current.value}/json/`, options)
      .then(res => setEndereco(res.data))
      .catch(err => console.log(err))
  }

  return (
    <main className='container mt-5'>
      <div className="row">
        <div className="col-12">
          <h3 className='mb-3'>Digite o seu CEP</h3>
          <label htmlFor="cep">CEP</label>
          <input className='form-control' required maxLength={9} onBlur={getCep} ref={cep} />
          <span className='btn btn-primary mt-2 mb-5'>Enviar</span>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Logradouro</th>
                <th scope="col">Bairro</th>
                <th scope="col">Localidade</th>
                <th scope="col">Complemento</th>
                <th scope="col">UF</th>
                <th scope="col">DDD</th>
              </tr>
            </thead>
            <tbody>
              <tr key={endereco.cep}>
                <th scope="row">1</th>
                <td>{endereco.logradouro}</td>
                <td>{endereco.bairro}</td>
                <td>{endereco.localidade}</td>
                <td>{endereco.complemento}</td>
                <td>{endereco.uf}</td>
                <td>{endereco.ddd}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
