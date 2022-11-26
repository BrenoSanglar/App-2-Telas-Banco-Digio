import { useNavigation } from "@react-navigation/native";
import { Switch, Modal, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";

import {
  Butao,
  InputLogin,
  Container,
  Proximo,
  MyText,
  MyTitle,
  MyTitleDois,
  ViewTitle,
  TextLembrar,
  ViewCpf,
  Toggle,
  ModalContainer,
  ModalText,
  ModalIcon,
  Icon,
} from "./styles";

export default function Login() {
  const navigation = useNavigation();
  const [credenciais, setCredenciais] = useState({
    cpf: "",
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch = async () => {
    if (!isEnabled) {
      if (credenciais.cpf.length === 11) {
        await AsyncStorage.setItem("cpf", credenciais.cpf);
        setIsEnabled(previousState => !previousState);
        await AsyncStorage.setItem("isRememberCPF", true);
      } else (
        setModalVisible(true)
      )
    } else {
      await AsyncStorage.removeItem("cpf")
      setIsEnabled(previousState => !previousState);
      await AsyncStorage.setItem("isRememberCPF", false);
    }
  }

  useEffect(async () => {
    const documentNumber = await AsyncStorage.getItem("cpf");
    if (documentNumber) {
      setCredenciais({ cpf: documentNumber })
    }

    const isRememberCPF = await AsyncStorage.getItem("cpf");
    if (isRememberCPF) {
      setIsEnabled(isRememberCPF)
    }

  }, []);


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
            Preencha o campo de CPF
          </ModalText>
        </ModalContainer>
      </Modal>

      <ViewTitle>
        <MyTitle>Digite seu CPF</MyTitle>
        <MyTitleDois>para acessar o app</MyTitleDois>
      </ViewTitle>

      <MyText>CPF</MyText>

      <InputLogin
        placeholderTextColor={'white'}
        defaultValue={credenciais.cpf}
        value={credenciais.cpf}
        onChangeText={(text) => setCredenciais({ ...credenciais, cpf: text })}
        maxLength={11}
        keyboardType="numeric"
      />

      <ViewCpf>
        <TextLembrar>Lembrar CPF</TextLembrar>
        <Toggle>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Toggle>
      </ViewCpf>

      <Butao
        disabled={credenciais.cpf.length !== 11 ? true : false}>
        <Proximo
          onClick={() => navigation.navigate("Senha")}
        >
          Próximo
        </Proximo>
      </Butao>
    </Container >
  );
}




