//react
import React from 'react';
//native
import { HeaderButton } from 'react-navigation-header-buttons'
//expo
import { Ionicons } from '@expo/vector-icons'

const CustomHeaderButton = props =>(
    <HeaderButton
    {...props}
    IconComponent = {Ionicons}
    inconSize = {30}
    color = 'white'
    />
) 
export default CustomHeaderButton;