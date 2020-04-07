import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import ApolloClient from 'apollo-boost'
import ApolloProvider from 'react-apollo'


const client = new ApolloClient({
    uri: 'https://petgram-server-jcamacaro.camacaro.now.sh/graphql'
})


ReactDOM.render(<App />, document.getElementById('app'));

