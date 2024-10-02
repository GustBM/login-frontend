import React, { useState } from 'react';
import { useAuth } from '@hooks/useAuth';
import Heatmap from '@components/Heatmap';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  const data = [
    {
      tempo: 42597,
      temperaturaEntradaMultijato: 38.59,
      temperaturaSaidaMultijato: 49.50,
      pressaoCozedor: 0.154,
      nivelCozedor: 2.418,
      capacitanciaCozedor: 0,
      aberturaValvulaAlimentacao: 1,
  
      // Additional attributes (1-7)
      aberturaValvulaAlimentacao_1: 1.1,
      nivelCozedor_1: 2.1,
      capacitanciaCozedor_1: 0,
      pressaoCozedor_1: 0.1,
  
      aberturaValvulaAlimentacao_2: 1.2,
      nivelCozedor_2: 2.2,
      capacitanciaCozedor_2: 0,
      pressaoCozedor_2: 0.2,
  
      aberturaValvulaAlimentacao_3: 1.3,
      nivelCozedor_3: 2.3,
      capacitanciaCozedor_3: 0,
      pressaoCozedor_3: 0.3,
  
      aberturaValvulaAlimentacao_4: 1.4,
      nivelCozedor_4: 2.4,
      capacitanciaCozedor_4: 0,
      pressaoCozedor_4: 0.4,
  
      aberturaValvulaAlimentacao_5: 1.5,
      nivelCozedor_5: 2.5,
      capacitanciaCozedor_5: 0,
      pressaoCozedor_5: 0.5,
  
      aberturaValvulaAlimentacao_6: 1.6,
      nivelCozedor_6: 2.6,
      capacitanciaCozedor_6: 0,
      pressaoCozedor_6: 0.6,
  
      aberturaValvulaAlimentacao_7: 1.7,
      nivelCozedor_7: 2.7,
      capacitanciaCozedor_7: 0,
      pressaoCozedor_7: 0.7,
    },
    {
      tempo: 42597.006944444445,
      temperaturaEntradaMultijato: 38.60,
      temperaturaSaidaMultijato: 50.26,
      pressaoCozedor: 0.138,
      nivelCozedor: 2.453,
      capacitanciaCozedor: 0,
      aberturaValvulaAlimentacao: 1.05,
  
      // Additional attributes (1-7)
      aberturaValvulaAlimentacao_1: 1.15,
      nivelCozedor_1: 2.15,
      capacitanciaCozedor_1: 0,
      pressaoCozedor_1: 0.15,
  
      aberturaValvulaAlimentacao_2: 1.25,
      nivelCozedor_2: 2.25,
      capacitanciaCozedor_2: 0,
      pressaoCozedor_2: 0.25,
  
      aberturaValvulaAlimentacao_3: 1.35,
      nivelCozedor_3: 2.35,
      capacitanciaCozedor_3: 0,
      pressaoCozedor_3: 0.35,
  
      aberturaValvulaAlimentacao_4: 1.45,
      nivelCozedor_4: 2.45,
      capacitanciaCozedor_4: 0,
      pressaoCozedor_4: 0.45,
  
      aberturaValvulaAlimentacao_5: 1.55,
      nivelCozedor_5: 2.55,
      capacitanciaCozedor_5: 0,
      pressaoCozedor_5: 0.55,
  
      aberturaValvulaAlimentacao_6: 1.65,
      nivelCozedor_6: 2.65,
      capacitanciaCozedor_6: 0,
      pressaoCozedor_6: 0.65,
  
      aberturaValvulaAlimentacao_7: 1.75,
      nivelCozedor_7: 2.75,
      capacitanciaCozedor_7: 0,
      pressaoCozedor_7: 0.75,
    },
  ];
  

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <div>
        <h1>Heatmap Example</h1>
        <Heatmap data={data} />
      </div>
    </div>
  );
};

export default Login;
