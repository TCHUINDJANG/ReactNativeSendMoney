import React, { useState } from 'react';
import { View , Text , FlatList , StyleSheet , TouchableOpacity , Picker , TextInput} from 'react-native'


const Transaction = () => {
    const [name , setName] = useState('');
    const [recipient , setRecipient] = useState('');
    const [date, setDate] = useState({});
    const [status, setStatus] = useState('en attente');
    const [amount, setAmount] = useState({});
    const [statusFilter , setStatusFilter] = useState('Tous')
    const [dateFilter , setDateFilter] = useState('');
    const [amountFilter , setAmountFilter] = useState('');



    //Fonction pour appliquer les filtres


    const filterTransactions = () => {
        return TransactionData.filter((transaction) => {
            const statusMatch = statusFilter === 'Tous' || transaction.filter === statusFilter;
            const dateMatch = dateFilter ? transaction.date.includes(dateFilter) : true;
            const amountMatch = amountFilter ? transaction.amount >= parseInt(amountFilter) : true
            return statusMatch && dateMatch && amountMatch;
        });
    };
    
}


const formatDate = ({dateString}) => {
    const date = new Date(dateString);
    return '{date.getDate()} / {date.getMonth() +1 } / {date.getFullYear()}'
}


const TransactionHistory = ({navigation})  => {
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.transactionCard} onPress={() => navigation.navigate()}>

        <View style={styles.transactionContent}>
            <Text style={styles.recipient}>{item.recipient}</Text>  
            <Text style={styles.amount}>{item.amount}</Text>  
        </View>



        <View style={styles.statusContainer}>
            <Text style={[styles.status , getStatusStyle(item.status)]}>{item.status}</Text>  
            <Text style={styles.amount}>{item.amount}</Text>  
        </View>


        <Text style={styles.date}>formatDate{item.date}</Text>  

       </TouchableOpacity>

    );


    return (
        <View style={styles.Container}>
            <Text style={styles.title}>Historiques des Transactions</Text>  


            <View style={styles.filter}>
                <Text style={styles.filterLabel}>Filtrer par status</Text>  


                <Picker
                selectedValue={statusFilter}
                style={styles.picker}
                onValueChange={(itemValue) => setStatusFilter(itemValue)}>

                <Picker.Item label="Tous" value="Tous"/>
                <Picker.Item label="Reussi" value="Reussi"/>
                <Picker.Item label="Echoue" value="Echoue"/>
                <Picker.Item label="En attente" value="En attente"/>

                </Picker>


                <Text style={styles.filterLabel}>Filter par montant minimum</Text>

                <TextInput
                style={styles.input}
                placeholder='Ex: 100'
                keyboardType='numeric'
                value={amountFilter}
                onChangeText={setAmountFilter}/>
                 </View>


            <FlatList>
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyles={styles.listContainer}
            </FlatList>
        </View>
    )
}


const getStatusStyle = (status) => {
    switch(status) {
        case 'Reussi':
            return {color: 'green'};
        case 'Echoue':
            return {color : 'red'};
        case 'En attante':
            return {color : 'orange'};
        default:
            return {color : 'gray'};
    }
};


const styles = StyleSheet.create({
    statusContainer: {
        flex: 1,
        backgroundColor:'#f4f4f4',
        padding: 15
    },

    title : {
        fontSize : 24,
        fontWeight: 'bold' , 
        marginBottom: 15,
        color : '#333',
    },

    listContainer: {
        paddingBottom : 100,
    },

    transactionCard: {
        backgroundColor:'white',
        padding:15,
        borderRadius: 8,
        marginBottom: 10,
        elevation:2, 
        shadowRadius: 3,
    },

    transactionContent :{
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})


export default TransactionHistory