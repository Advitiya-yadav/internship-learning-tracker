import { useReducer } from "react";

const emptyData = {
    name: '',
    password: '',
    email: '',
    city: '',
    address: ''
}
const reducer=(data,action)=>{}
function App() {
    const [state,dispatch]=useReducer(reducer, emptyData)
    return (
        <div>
            <h1>Use Reducer</h1>

            <input type="text" placeholder="enter name" />
            <br /><br />

            <input type="text" placeholder="enter password" />
            <br /><br />

            <input type="text" placeholder="enter email" />
            <br /><br />

            <input type="text" placeholder="enter city" />
            <br /><br />

            <input type="text" placeholder="enter address" />
            <br /><br />

            <button>Add Details</button>
        </div>
    );
}

export default App;