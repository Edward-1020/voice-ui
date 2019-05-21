import Vue from 'vue';
import App from './App.vue';
import Container from './pages/container/index';
import Header from './pages/head/index';
import Content from './pages/content/index';
import Nav from './pages/nav/index';
import Simulator from './pages/simulator/index';


const components = [
    App,
    Container,
    Header,
    Content,
    Nav,
    Simulator
];

export default function install () {
    components.map(Component => {
        Vue.component(Component.name, Component);
    });
}

export {
    App,
    Container,
    Header,
    Content,
    Nav,
    Simulator
}