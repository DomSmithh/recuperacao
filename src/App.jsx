import Title from './Title';
import Button from './Button';
import SayName from './SayName';
import Perfil from './Perfil';
import "./App.css"
import Produto from './Produto';

function App(){
  const produtos = [
    {
      nome: "Start",
      valor: "Free",
      user: "1 User",
      projeto: "1 Project",
    },
    {
      nome: "Basic",
      valor: "$ 19.99",
      user: "5 User",
      projeto: "20 Project",
    },
    {
      nome: "Expert",
      valor: "$129.99",
      user: "Unlimited Users",
      projeto: "Unlimited Projects",
    },
   
  ];

    return(
      <div>
        {
          produtos.map((produtos, i) => {
            return <Produto key={i}
                    nome={produtos.nome}
                    valor={produtos.valor}
                    user={produtos.user}
                    projeto={produtos.projeto}
                />;
            })
          }
        </div>
      );
}

export default App;
