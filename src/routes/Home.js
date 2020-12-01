import React, { useState, useEffect, useContext, useRef } from "react";
import products from "../assets/products-filtered.json";
import { makeStyles, fade } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import StackGrid from "react-stack-grid";
import Divider from "@material-ui/core/Divider";
import { getRandomSubarray, convertHTML } from "../utils";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from '@material-ui/core/InputBase';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { AppContext } from "../App";
import { Link } from "react-router-dom";

function ProductCard(props) {
    const { title, image, brand, rank, price } = props;

    const [src, setSrc] = useState(image[0]);

    const { setSelectedProduct, setTitle } = useContext(AppContext);


    const onClick = () => {
        setTitle("Checkout");
        setSelectedProduct({
            title,
            brand,
            rank,
            price,
            image: src
        });
    }

    return (
        <Link to="/checkout" className="product-card" onClick={onClick}>
            <img src={src} />
            <div>
                <Typography variant="subtitle1">{title}</Typography>
                <Divider style={{ width: "100%", margin: "10px 0" }} />
                <span style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <Typography variant="caption">{convertHTML(brand)}</Typography>
                    <Typography style={{ color: "green" }}><b>{price}</b></Typography>
                </span>
            </div>
        </Link>
    )

}

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'fixed',
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        left: 0,
        right: 0,
        top: 15,
        zIndex: 100000,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.35),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '400px !important',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        cursor: "text",
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: "100%"
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        paddingRight: 3,
    }
}));

export default function Home() {
    const [displayedProducts, setDisplayedProducts] = useState(getRandomSubarray(products.filter(ele => !!ele.brand), 20));
    const [searchValue, setSearchValue] = useState("");

    const classes = useStyles();

    useEffect(() => {
        if (searchValue !== "") {
            const newVals = [];
            for (const currProduct of products) {
                if (!!currProduct.brand && currProduct.title.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1) {
                    newVals.push(currProduct);
                    if (newVals.length > 100) {
                        break;
                    }
                }
            }
            setDisplayedProducts(newVals);
        } else {
            setDisplayedProducts(getRandomSubarray(products.filter(ele => !!ele.brand), 20));
        }
    }, [ searchValue ]);

    return (
        <div>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search For Product…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    endAdornment={searchValue !== "" ? <IconButton style={{ marginRight: 8 }} size="small" onClick={_ => setSearchValue("")}><CloseIcon /></IconButton> : null}
                />
            </div>
            <Typography variant="h2" style={{ textAlign: "center", marginBottom: 40 }}>{ !searchValue ? "Hottest Items!" : "Search Results"}</Typography>
            <StackGrid
                columnWidth={300}
                monitorImagesLoaded={true}
                gutterWidth={30}
                gutterHeight={20}
            >
                {displayedProducts.map(ele => 
                    <ProductCard 
                        title={ele.title}
                        image={ele.image}
                        brand={ele.brand}
                        rank={ele.rank}
                        price={ele.price || `$${(Math.random() * (1000.00 - 1.00 + 1.00) + 1.00).toFixed(2)}`}
                        key={ele.title} 
                    />
                )}
            </StackGrid>
        </div>
    )
}