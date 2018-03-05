import React from 'react';
import ReactDOM from 'react-dom';

//import './App.less';

import validator from 'validator';
import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';
import Button from 'react-validation/build/button';

const required = (value) => {
	if (!value.toString().trim().length) {
		return 'required';
	}
};

class App extends React.Component {



	myFunction() {
		alert("Ok!");
	};

	statetest() {

	};


	/*render() {
		return (
			<div className="Note">
				<span>New one is here, again!</span>
				<input type="button" value="Ok!" onClick={this.myFunction} />
				<Input type='password' name='password' name='test-input' onChange={this.statetest} validations={[required]} />
			</div>
		);
	}*/

	render() {
        return <Form>
            <h3>Login</h3>
            <div>
                <label>
                    Email*
                    <Input value='email@email.com' name='email' validations={[required]}/>
                </label>
            </div>
            <div>
                <label>
                    Password*
                    <Input type='password' name='password' validations={[required]}/>
                </label>
            </div>
            <div>
                <Button>Submit</Button>
            </div>
        </Form>;
    }
}

export default App;