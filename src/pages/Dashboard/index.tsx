import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios do Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/13472488?s=460&u=7c0fdc6888ff188daeaaa8b3f76afaea9cbb68b0&v=4"
            alt="Marcelo Amorim"
          />
          <div>
            <strong>marcelo-amorim/nodejs-concepts</strong>
            <p>
              Conceitos do Node.js. Desafio da Bootcamp GoStack da Rocketseat
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
