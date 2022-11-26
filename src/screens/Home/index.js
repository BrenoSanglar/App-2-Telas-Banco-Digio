import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Container,
  MyHeader, Logo, User, Dashboard, Value, TextValue, Icon,
  Text, TextExtract, Grid, GridItem, TextCardGrid, TitleMyCreditCard,
  TextCreditCard, SliderCreditCard, ImageCard, CreditCard
} from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export default function Home() {
  const navigation = useNavigation();
  const [valueHidden, setValueHidden] = useState(false)

  return (
    <Container>
      <MyHeader>
        <Logo>
          <Image
            source={require("../../../assets/logo.png")}
            style={{ width: 50, height: 50 }}
          />
        </Logo>
        <User>
          Breno
        </User>
      </MyHeader>
      <Dashboard>
        <Text>Minha Conta</Text>
        <Value>
          <TextValue>{valueHidden ? "••••••••" : "R$ 100,00"}</TextValue>
          <Icon onClick={() => { setValueHidden(!valueHidden) }}><Ionicons name={valueHidden ? "eye-off" : "eye"} size={30} color={"#ddd"} /></Icon>
        </Value>
        <TextExtract>Ver Extrato </TextExtract>
        <Grid>
          <GridItem>
            <Ionicons name={"phone-portrait"} size={30} color={"#ddd"} />
            <TextCardGrid>
              Recarga de celular
            </TextCardGrid>
          </GridItem>
          <GridItem>
            <Ionicons name={"phone-portrait"} size={30} color={"#ddd"} />
            <TextCardGrid>
              Recarga de celular
            </TextCardGrid>
          </GridItem>
          <GridItem>
            <Ionicons name={"phone-portrait"} size={30} color={"#ddd"} />
            <TextCardGrid>
              Recarga de celular
            </TextCardGrid>
          </GridItem>
          <GridItem>
            <Ionicons name={"phone-portrait"} size={30} color={"#ddd"} />
            <TextCardGrid>
              Recarga de celular
            </TextCardGrid>
          </GridItem>
        </Grid>
      </Dashboard>
      <CreditCard>
        <TitleMyCreditCard>
          Meus cartões
        </TitleMyCreditCard>
        <TextCreditCard>
          Cartão de crédito
        </TextCreditCard>
        <Ionicons name={"lock-closed"} size={30} color={"#ddd"} />
        <SliderCreditCard>
          <ImageCard>
            <Image
              source={require("../../../assets/cartao-digio.png")}
            />
          </ImageCard>
        </SliderCreditCard>
      </CreditCard>
    </Container>
  );
}






