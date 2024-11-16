import React from "react";
import { View , Text, StyleSheet} from "react-native";


const TransactionDetails = ({route}) => {
    const {transactionId} = route.params;

    //recupere ici les details d'une transaction par ID



    return(
        <View style={styles.container}>
            <Text style={style.title}>Details de la transaction {transactionId}</Text>  
            
        </View>
    );
};


export default TransactionDetails