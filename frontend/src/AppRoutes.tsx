import { Routes, Route, Navigate } from "react-router-dom"
import Layout from "./layouts/Layout"

const AppRoutes= ()=>{
    return(
        // <Routes> signifies group of routes
        <Routes>
            <Route path="/" element={<Layout>Home Page</Layout>}/>
            <Route path="/user-profile" element={<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element={<Navigate to="/" />}/>
            {/* using navigate we are transferring all the other routes to the main page */}

        </Routes>
    )
}

export default AppRoutes