import React from "react";
import Typography from "@material-ui/core/Typography";

const products = [
    {
        title: "New iPad Mini Hard Shell Protective Back Cover Sleeve Case (2 Pack) (Black)",
        brand: "Mycarryingcase",
        price: "$728.53",
        image: "https://images-na.ssl-images-amazon.com/images/I/31Kl6H7Ys4L._100_.jpg"
    },
    {
        title: "Barnes & Noble NOOK Color Montgomery Protective Cover Petal (Pink)",
        brand: "Barnes & Noble",
        price: "$800.56",
        image: "https://images-na.ssl-images-amazon.com/images/I/41IV4Wy9wfL._100_.jpg"
    }
]


function ProductHint({ title, image, brand, rank, price }) {
    return (
        <div style={{ display: "flex", alignItems: "center", width: 550, height: 150, backgroundColor: "#CCC", margin: "20px 0", padding: 4 }}>
            <img src={image} height="140px" width="140px" />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 5 }}>
                <Typography variant="caption" style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: 550 - 160 }}>{title}</Typography>
                <Typography variant="caption" style={{ color: "green" }}>{price}</Typography>
            </div>
        </div>

    )
}

export default function User() {
    return (
        <div style={{ width: "100%", padding: "0 200px" }}>
            <Typography variant="h3">Hello!</Typography>
            <Typography variant="h4" style={{ marginTop: 20 }}>Previous Orders</Typography>
            {products.map(ele => 
                <ProductHint key={ele.title} {...ele} />
            )}
        </div>
    )
}