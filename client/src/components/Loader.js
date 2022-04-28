import { makeStyles } from '@material-ui/core/styles';
import FadeLoader from "react-spinners/FadeLoader";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    loading: {
        position: 'fixed',
        display: "flex",
        top: '380px',
        left: '46%',
        right:'45%',
        // minWidth: '140px',
        zIndex:100
    },
}));

const Loader = ({loading}) => {
    const classes = useStyles();

    return (
        <Box className={classes.loading}>
            <FadeLoader color={'#1375D3'} loading={loading} size={60} />
        </Box>
    );
}

export default Loader;