import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from "../App";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import stripes from "../assets/stripes.jpeg"
import dots from "../assets/dots.jpeg"
import glitter from "../assets/glitter.jpeg"
import TextField from '@material-ui/core/TextField';
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import CircularProgress from "@material-ui/core/CircularProgress";
import CheckIcon from "@material-ui/icons/Check";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(1),
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
}));

function SelectWrappingPaper() {
    return (
        <FormControl component="fieldset">
            <RadioGroup row aria-label="position" name="position" defaultValue="Stripes">
                <div className="wrapping-paper">
                    <img src={stripes} />
                    <FormControlLabel
                        value="Stripes"
                        control={<Radio color="primary" />}
                        label="Stripes"
                        labelPlacement="bottom"
                    />
                </div>
                <div className="wrapping-paper">
                    <img src={dots} />
                    <FormControlLabel
                        value="Dots"
                        control={<Radio color="primary" />}
                        label="Dots"
                        labelPlacement="bottom"
                    />
                </div>
                <div className="wrapping-paper">
                    <img src={glitter} />
                    <FormControlLabel
                        value="Glitter"
                        control={<Radio color="primary" />}
                        label="Glitter"
                        labelPlacement="bottom"
                    />
                </div>
            </RadioGroup>
        </FormControl>
    );
}

function SelectCard() {
    return (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", marginRight: 30 }}>
                <TextField label="To" variant="outlined" color="secondary" style={{ marginBottom: 20, width: 300 }} />
                <TextField label="From" variant="outlined" color="secondary" style={{ marginBottom: 20 }} />
                <TextField
                    id="outlined-multiline-static"
                    style={{ marginBottom: 20 }}
                    label="Custom Message"
                    multiline
                    rows={8}
                    defaultValue="Happy Holidays!"
                    variant="outlined"
                    color="secondary"
                />
            </div>
            <FormControl component="fieldset">
                <RadioGroup row defaultValue="Stripes" >
                    <div className="wrapping-paper-vert">
                        <img src={card1} />
                        <FormControlLabel
                            value="Card 1"
                            control={<Radio color="primary" />}
                            label="Card 1"
                            labelPlacement="end"
                        />
                    </div>
                    <div className="wrapping-paper-vert">
                        <img src={card2} />
                        <FormControlLabel
                            value="Card 2"
                            control={<Radio color="primary" />}
                            label="Card 2"
                            labelPlacement="end"
                        />
                    </div>
                </RadioGroup>
                <RadioGroup row defaultValue="Stripes" >
                    <div className="wrapping-paper-vert">
                        <img src={card3} />
                        <FormControlLabel
                            value="Card 3"
                            control={<Radio color="primary" />}
                            label="Card 3"
                            labelPlacement="end"
                        />
                    </div>
                    <div className="wrapping-paper-vert">
                        <img src={card4} />
                        <FormControlLabel
                            value="Card 4"
                            control={<Radio color="primary" />}
                            label="Card 4"
                            labelPlacement="end"
                        />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    );
}

function SelectDeliver() {
    return (
        <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", width: 250, marginRight: 30 }}>
                <Typography variant="h6">Where to deliver</Typography>
                <TextField
                    id="date"
                    type="date"
                    label="Delivery Date"
                    variant="outlined"
                    style={{ marginBottom: 20, marginTop: 20 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField label="Address" variant="outlined" color="secondary" style={{ marginBottom: 20 }} />
                <div style={{ display: "flex", marginBottom: 20 }}>
                    <TextField label="City" variant="outlined" color="secondary" style={{ marginRight: 4 }} />
                    <TextField label="State" variant="outlined" color="secondary" style={{ marginLeft: 4 }} />
                </div>
                <TextField label="Zip code" type="number" variant="outlined" color="secondary" style={{ marginBottom: 20 }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: 250, marginLeft: 30 }}>
                <Typography variant="h6">Payment</Typography>
                <TextField label="Credit Card #" variant="outlined" color="secondary" style={{ marginBottom: 20, marginTop: 20 }} />
                <TextField label="Name on Card" variant="outlined" color="secondary" style={{ marginBottom: 20 }} />
                <TextField label="Expiration (MM/YY)" variant="outlined" color="secondary" style={{ marginBottom: 20 }} />
                <TextField label="CVV" type="number" defaultValue="123" variant="outlined" color="secondary" style={{ marginBottom: 20 }} />
            </div>
        </div>

    )
}

function ConfirmOrder() {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: 450 }}>
            <Typography style={{ marginBottom: 10 }}><b>Deliver To:</b> 123 Main Street, Pittsburgh, PA 15213</Typography>
            <Typography style={{ marginBottom: 10 }}><b>Delivery Date:</b> December 25th, 2020</Typography>
            <Typography style={{ marginBottom: 10 }}><b>Wrapping Paper:</b> Stripes</Typography>
            <Typography style={{ marginBottom: 10 }}><b>From:</b> Michael</Typography>
            <Typography style={{ marginBottom: 10 }}><b>To:</b> Aunt Maura</Typography>
            <Typography style={{ marginBottom: 10 }}><b>Custom Message:</b> Have a great Christmas! Tell the kids I said hello!</Typography>
            <Typography style={{ marginBottom: 10 }}><b>Letter Color:</b> Blue</Typography>
            <Divider />
            <Typography style={{ marginBottom: 10, marginTop: 10 }}><b>Credit Card:</b> ****5555</Typography>
            <Typography style={{ marginBottom: 10 }}><b>Name On Card:</b> Michael J. Smith</Typography>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                <Typography variant="h6">Price: </Typography>
                <Typography variant="h6" style={{ color: "green", marginLeft: 8 }}><b>$25.15</b></Typography>
            </div>
        </div>
    )
}


function ProductHint({ title, image, brand, rank, price }) {
    return (
        <div style={{ display: "flex", alignItems: "center", width: 350, height: 80, backgroundColor: "#CCC", position: "absolute", left: 400, bottom: 160, padding: 3 }}>
            <img src={image} height="70px" width="70px" />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 5 }}>
                <Typography variant="caption" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: 350 - 85 }}>{title}</Typography>
                <Typography variant="caption" style={{ color: "green" }}>{price}</Typography>
            </div>
        </div>

    )
}


function SuccessScreen() {
    const [loaded, setLoaded] = useState(false);

    useState(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 2000)
    }, [])
    const GreenSuccessCheck = () => {
        
        return (
            <Fab style={{ backgroundColor: "green", boxShadow: 'none', pointerEvents: 'none' }} >
                <CheckIcon style={{ color: 'white' }} fontSize={'large'} />
            </Fab>
        )
    }

    return(
        <>
            {!loaded && <CircularProgress color="primary" /> }
            {loaded && 
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <GreenSuccessCheck/>
                    <Typography style={{ marginTop: 20 }} variant="h4">Order Successfully Placed!</Typography>
                </div> }
        </>
    )
}

export default function Checkout(props) {
    const [activeStep, setActiveStep] = useState(0);

    
    const steps = ['Select Wrapping Paper', 'Customize Card', 'Delivery Options', 'Confirm Order'];
    const classes = useStyles();

    const { selectedProduct } = useContext(AppContext);

    const getStepContent = () => {
        switch (activeStep) {
            case 0:
                return <SelectWrappingPaper />
            case 1:
                return <SelectCard />
            case 2:
                return <SelectDeliver />
            case 3:
                return <ConfirmOrder />
            case 4:
                return <SuccessScreen />
            default:
                break;
        }
    }

    return (
        <div className={classes.root}>
            <ProductHint {...selectedProduct} />
            <Typography variant="h4" style={{ textAlign: "center" }}>{steps[activeStep]}</Typography>
            <div className={classes.instructions}>{getStepContent()}</div>
            <div style={{ position: "absolute", bottom: 20, width: "80%", overflow: "hidden", left: 0, right: 0, marginLeft: "auto", marginRight: "auto" }}>
                {activeStep === steps.length ? (
                    <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", paddingRight: 300, paddingBottom: 50 }}>
                        <Link component={Button} to="/" onClick={_ => setActiveStep(0)}>Home</Link>
                    </div>
                ) : (
                        <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", paddingRight: 300, paddingBottom: 50 }}>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={_ => setActiveStep(prev => prev - 1)}
                                    className={classes.backButton}
                                >
                                    Back
                            </Button>
                                <Button variant="contained" color="primary" onClick={_ => setActiveStep(prev => prev + 1)}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>
        </div>
    );
}