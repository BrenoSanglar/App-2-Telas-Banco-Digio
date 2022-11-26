// import styled from 'styled-components/native';

// export const Container = styled.View`
//     display: flex;
//     flex: 1;
//     background-color: #160b30;
//     justify-content: center;
// `;

// export const Cabecalho = styled.Div`
//     display: flex;
// `;

// export const User = styled.Div`
//     display: flex;
// `;

// export const Logo = styled.Div`
//     background-color: gray;
//     border-radius: 50px;
// `;

// export const Name = styled.Text`
//     color: #FFF;
// `;


import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: #160b30;
    justify-content: flex-start;
    padding-left: 5%;
`;

export const MyHeader = styled.View`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid gray;
    border-top-color: #160b30;
    border-left-color: #160b30;
    border-right-color: #160b30;
`;

export const Logo = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: gray;
    margin-left: 5%;
`;

export const User = styled.View`
    margin-left: 15px;
    font-size: 16px;
    color: #fff;
`;

export const Dashboard  = styled.View`
    display: flex;
`;

export const Text = styled.Text`
    font-weight: 800;
    font-size: 18px;
    color: #fff;
    margin-top: 15px;
`;

export const Value = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Icon = styled.View`
    color: #FFF;
    margin-right: 5%;
`;

export const TextValue = styled.Text`
    color: #00FFFF;
    font-size: 18px;
    margin-top: 5px;
`;

export const TextExtract = styled.Text`
    font-size: 14px;
    color: #FFF;
    margin-top: 15px;
`;

export const Grid = styled.View`
    display: grid;
    grid-template-columns: repeat(4, 95px);
    gap: 7px;
    overflow-x: scroll;
    margin-top: 20px;
`;

export const GridItem = styled.View`
    width: 95px;
    height: 90px;
    background-color: rgba(50,47,97,0.8);
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 15px;
`;

export const CreditCard = styled.View`
    background-color: #FFF;
    margin-top: 30px;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 15px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

export const TextCardGrid = styled.View`
    color: #fff;
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
`;

export const TitleMyCreditCard = styled.Text`
    font-weight: 700;
    color: #000;
`;

export const TextCreditCard = styled.Text`
    color: #000;
`;

export const SliderCreditCard = styled.View`
    display: flex;
`;

export const ImageCard = styled.View`
    margin-right: 15px;
`;