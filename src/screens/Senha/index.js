import { useNavigation } from "@react-navigation/native";
import { Switch, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

import {
  Butao,
  TextInput,
  Container,
  Proximo,
  MyText,
  MyTitle,
  MyTitleDois,
  ViewTitle,
  ModalContainer,
  ModalText,
  ModalIcon,
  Icon,
  Password,
} from "./styles";

export default function Senha() {
  const navigation = useNavigation();
  const [credenciais, setCredenciais] = useState({
    password: "123"
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState("")
  const [secure, setSecure] = useState(true);

  const verifyPassword = () => {
    if (password === credenciais.password) {
      navigation.navigate("Home")
    } else {
      setModalVisible(true)
    }
  }

  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Fechar Modal");
          setModalVisible(!modalVisible);
        }}
      >
        <ModalContainer>
          <ModalIcon>
            <Icon onClick={() => { setModalVisible(false) }}><Ionicons name="close" size={30} color={"#ddd"} /></Icon>
          </ModalIcon>
          <ModalText>
            Senha incorreta
          </ModalText>
        </ModalContainer>
      </Modal>

      <ViewTitle>
        <MyTitle>Digite a sua</MyTitle>
        <MyTitleDois>senha de acesso</MyTitleDois>
      </ViewTitle>

      <Password>
        <MyText>Senha</MyText>
        <Icon onClick={() => { setSecure(!secure) }}><Ionicons name={secure ? "eye-off" : "eye"} size={30} color={"#ddd"} /></Icon>
      </Password>

      {/* <InputSenha
        placeholderTextColor={'white'}
        onChangeText={
          (text) => { setPassword(text) }
        }
        keyboardType="numeric"
        secureTextEntry={secure}
        value={password}
      /> */}

      <TextInput
        placeholderTextColor={'white'}
        placeholder="Insira sua senha"
        onChangeText={
          (text) => { setPassword(text) }
        }
        keyboardType="numeric"
        secureTextEntry={secure}
        value={password}
      />

      <Butao
        disabled={password === credenciais.password ? false : true}>
        <Proximo
          onClick={() => verifyPassword()}
        >
          Entrar
        </Proximo>
      </Butao>
    </Container >
  );
}




