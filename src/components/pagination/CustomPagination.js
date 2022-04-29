import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const CustomPagination = ({ setPage, numofPages=10 }) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    count={numofPages}
                    onChange={(e) => handlePageChange(e.target.textContent)} />
            </ThemeProvider>
        </div >
    )
}

export default CustomPagination;