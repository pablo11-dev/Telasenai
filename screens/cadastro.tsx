import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/botao';
import { View } from 'react-native'; // Import the 'View' component from 'react-native'

function cadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View>
      <View>
        <Logo text="Cadastre-se" color="red" />
      </View>
      <View>
        <InputField label="Nome" placeholder="Digite seu nome" value={nome} setValue={setNome} />
        <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" value={sobrenome} setValue={setSobrenome} />
        <InputField label="Email" placeholder="Digite seu Email" value={email} setValue={setEmail} />
        <InputField label="Telefone" placeholder="Digite seu Telefone" value={telefone} setValue={setTelefone} />
        <InputField label="Senha" placeholder="Digite sua Senha" value={senha} setValue={setSenha} />
        <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" value={confirmarSenha} setValue={setConfirmarSenha} />
        <Botao text="Cadastrar" color="black" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default cadastro;