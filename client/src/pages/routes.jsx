import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
import Auth from './Auth';
import Dashboard from './Dashboard';

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/auth/*" element={<Auth />} /> {/* This will catch all /auth routes */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Index;
