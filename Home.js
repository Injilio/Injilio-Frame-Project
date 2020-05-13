import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import numeral from 'numeral';


import axios from 'axios';
import { IPSERVER, REQUEST_TIME_OUT } from './../../config/config';
import { TouchableOpacity } from 'react-native-gesture-handler';

export class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: '',
            loading: true
        }
    }


    componentDidMount() {
        axios.post(`${IPSERVER}`, {
            timeout: REQUEST_TIME_OUT
        })
            .then(response => this.setState({ data: response.data, loading: false }))
            .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.data);
        const { data, loading } = this.state;
        return (
            <View style={styles.container}>
                {
                    loading ?
                        <ActivityIndicator size="small" color="#ffff00" />
                        :
                        <View>
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('DetailScreen') }}
                            >

                                <ListItem
                                    title='Konfirmasi Kasus'
                                    subtitle={numeral(data.confirmed.value).format('0,0')}
                                    leftIcon={
                                        <Icon name="virus" size={30} color="#900" />
                                    }
                                    bottomDivider
                                />
                            </TouchableOpacity>
                        </View>
                }
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});