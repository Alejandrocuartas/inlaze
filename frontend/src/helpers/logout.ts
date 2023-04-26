const logout = () => {
    localStorage.removeItem("jwt_token");
    location.reload()
}

export default logout;
