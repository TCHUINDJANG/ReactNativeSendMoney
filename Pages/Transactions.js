import React , {useEffect , useState} from "react";
import { View , Text , Button , FlatList } from "react-native";
import { getTransaction } from "../api_transation";





const TransactionList = ({token}) => {

    const [transactions , setTransactions] = useState([])



    useEffect(() =>   {
        const fetchTransactions = async () => {
            const response = await getTransaction(token)
            setTransactions(response.data)
        };

        fetchTransactions();
    } , [token]);


    return (
        <View>
            <FlatList>
                data = {transactions}
                keyExtractor={(item) => item.id.toString() }
                renderItems={({item})  => (
                    <View><Text>{item.amount} to {item.recipient}</Text></View>
                )}
            </FlatList>

            <Button title="Add Transaction" onPress={Transact}></Button>
        </View>
    )
}


export default TransactionList