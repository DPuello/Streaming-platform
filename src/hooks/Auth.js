import Cookies from 'universal-cookie';

function Auth(component) {
    const cookies = new Cookies();

    if (!cookies.get("user") && !window.location.href.includes("/login")) {
        console.log("DF");
        window.location.href = "/login";
    }
    
    return component
}

export default Auth