import SubHero from "../components/SubHero";

const NotFound = () => {
    return (
        <div>
            <SubHero title="Page Not Found" />
            <p>
                Looks like nothing exists at this address, try using the nav to find what you're
                looking for.
            </p>
        </div>
    );
};

export default NotFound;
