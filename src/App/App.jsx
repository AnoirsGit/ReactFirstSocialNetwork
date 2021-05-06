import React from 'react';
import NavComponent from './shared/Nav.component.js'
import ContentComponent from './Content/Content.component'

export const AppJsx = () => {
    return (
    <div className="container mx-auto mt-14 glassy glassy-border rounded-2xl flex items-stretch">
        <NavComponent />
        <ContentComponent />
    </div>)
}