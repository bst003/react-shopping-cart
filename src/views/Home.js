const Home = (props) => {
    const { updateCart } = props;

    const triggerUpdateCart = (e) => {
        console.log(props);
        const testObj = {
            name: "Quokka Storm Maroon",
            slug: "quokka-storm-maroon",
            price: 30,
            quantity: 1,
        };

        updateCart(testObj);
    };

    return (
        <div>
            <h2>Home</h2>
            <button onClick={triggerUpdateCart}>Update cart</button>
        </div>
    );
};

export default Home;
