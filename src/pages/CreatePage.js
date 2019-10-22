import React from 'react';
import {Grid} from 'semantic-ui-react';

class CreatePage extends React.Component{

    componentDidMount(){
        //The initial call to when we ger the config 
        this.props.getConfig(); 
    }

    render(){
        return (
            <div className={"createPage"}>
                
            </div>
        )
    }
}
export default CreatePage;