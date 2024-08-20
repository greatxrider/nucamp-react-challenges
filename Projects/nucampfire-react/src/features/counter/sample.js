import { useState } from "react";

const personInitVals = {
    id: 0,
    name: {
        first: "Kevin",
        last: "Bacon"
    }
};

const ParentComponent = () => {
    // Note you do not need to destructure the updater function
    // if you don't intend to use it
    const [person] = useState(personInitVals);

    return <ChildComponent person={person} />;
};

const ChildComponent = ({ person }) => {
    const { id, name } = person;
    // Props object passed in without destructuring
    console.log("props in ChildComponent: ", person);
    return (
        <>
            <p>ID: {id}</p>
            <GrandchildComponent name={name} />
        </>
    );
};

const GrandchildComponent = ({ name }) => {
    // name property destructured from props object
    // then first and last properties of name object further destructured
    const { first, last } = name;

    return (
        <p>
            Name: {first} {last}
        </p>
    );
};

const App = () => {
    return (
        <div>
            <ParentComponent />
        </div>
    );
};

export default App;
