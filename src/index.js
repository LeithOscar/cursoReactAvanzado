import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import ApolloClient from 'apollo-boost'
import ApolloProvider from 'react-apollo'


const client = new ApolloClient({

    //petgram-server-leith
    uri: 'https://petgram-server-jcamacaro.camacaro.now.sh/graphql'
})


ReactDOM.render(<App />, document.getElementById('app'));

