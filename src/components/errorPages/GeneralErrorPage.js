import React, {Component} from 'react';
import routes from '../../constants/Routes';
import History from '../../utility/History';

class GeneralErrorPage extends Component {

    constructor( props ) {
        
        super( props );
    }

    goBackToHomePage() {
        History.push( routes.makelist );
        History.go();
    }

    render() {
        const { componentStack, error } = this.props;

        return (
            <div className='btw-error'>
                <div>
                    <h3>Sorry ....Something went wrong .... Please try again later</h3>
                    <br/><br/><br/>
                    <button className='btn btn-primary btn-general-go-back' 
                            onClick={this.goBackToHomePage.bind(this, 'backToHomePage')}>
                        Go back list page
                    </button>
                </div>
			</div>
        );
    }
}

export default GeneralErrorPage;