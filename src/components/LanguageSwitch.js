import { Link } from "gatsby";
import * as React from "react";

export default function LanguageSwitch({location}) {
    let pageName = location.pathname

    if (pageName.includes("/ht")) {
        pageName = pageName.split("/")[2]
    }

    let kreyolPagePath = `/ht/${pageName}`

    return (
        <div>
            <Link to={pageName}>English</Link>
            <Link to={kreyolPagePath}>Kreyol</Link>
        </div>
    )
}