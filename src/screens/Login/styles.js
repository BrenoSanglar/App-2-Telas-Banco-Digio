import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: #160b30;
    justify-content: center;
`;

export const ModalContainer = styled.View`
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    width: 80vw;
    height: 60px;
    margin: auto;
    border-radius: 5px;
    background: #FFF;
    box-shadow: 2px 4px 4px rgb(255 255 255);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
`;

export const ModalIcon = styled.View`
    position: absolute;
    right: 10px;
`;

export const Icon = styled.View`
    color: #000;
`;

export const ModalText = styled.Text`
    text-align: center;
`;

export const Proximo = styled.Text`
    font-family: montserrat;
    text-align: center;
    color: #9E9E9E;
    font-weight: bold;
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    margin: auto;
    margin-top: 15px;
    
`;

export const Butao = styled.TouchableOpacity`
    height: 33px;
    width: 90vw;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 4px rgba(0,0,0,0.25);
    background-color: #FFFF;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    
`;

export const InputLogin = styled.TextInput`
    height: 31px;
    width: 90%;
    border: 2px solid #00FFFF;
    border-top-color: #160b30;
    border-left-color: #160b30;
    border-right-color: #160b30;
    padding-left: 5px;
    font-family: sans-serif;
    color: #FFF;
    margin: 0 5%;
`;

export const Toggle = styled.View`
    display: flex;
`;

// export const InputPassword = styled.TextInput`
//     height: 31px;
//     width: 188px;
//     border: 2px solid #00FFFF;
//     border-radius: 5px;
//     padding-left: 5px;
//     font-family: sans-serif;
//     margin-bottom: 5px;
//     box-shadow: 0 4px 4px rgba(0,0,0,0.25);
// `;

export const MyTitle = styled.Text`
    color: #FFF;
    font-size: 20px;
`;

export const MyTitleDois = styled.Text`
    color: #FFF;
    font-size: 20px;
`;

export const MyText = styled.Text`
    color: #FFF;
    font-size: 12px;
    margin-left: 5%;
`;

export const ViewTitle = styled.View`
    text-align: left;
    margin-left: 5%;
    margin-bottom: 20px;
`;

export const TextLembrar = styled.Text`
    color: #FFF;
    display: flex;
    margin-right: 15px;
`;

export const ViewCpf = styled.View`
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    margin-right: 10%;
    margin-top: 10px;
`;












