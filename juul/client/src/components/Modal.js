import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';

class Modal extends Component {

    render() {
        return (
            <div>
               <h3> hello from modal</h3> 
            </div>
        );
    }
}

export default Modal;