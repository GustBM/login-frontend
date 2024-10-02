import React from 'react';
import { useAuth } from '@hooks/useAuth';
import FileUpload from '@components/FileUpload';

const Home: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Welcome to the Home Page!</h2>
      <div>
        <FileUpload />
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
