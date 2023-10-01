import { Box } from "@mui/material"
import Dashboard from '../components/pages/Dashboard'
import Layout from "../components/layouts/Layout"

import File from "../components/pages/File"

const authRouter = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/file',
            element: <File/>
        },
        {
            path: '/sections',
            element: <Box>Sections</Box>
        },
    ]
}

export default authRouter